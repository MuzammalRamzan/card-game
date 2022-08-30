import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Col, Row, Container, Card } from "react-bootstrap";
import { FoodCard, Specialanimal } from "./PicArray.js";
import "./animalCard.css";
import { loadWeb3 } from "../Api/Api";
import { Link, useHistory } from "react-router-dom";
import { abi, contractAddress } from "../Constants/constant";
import { toast } from "react-toastify";

export default function AnimalCard() {
  let history = useHistory();

  const [account, setAccount] = useState("");
  let [Opacity, setOpacity] = useState(false);
  let [btnText, setbtnText] = useState("Get Food Card");
  let [imgId, setImgId] = useState();
  const [show, setShow] = useState(false);
  let [UserScore, setUserScore] = useState(0);
  let [GameScore, setGameScore] = useState(0);
  let [gameFcard, setgamefCard] = useState(0);
  let [userFcard, setuserFcard] = useState();
  let [forceAiCard, setforceAiCard] = useState(false);
  let [ownSpecialFood, setOwnSpecialFood] = useState(false);
  let [notSpecialCount, setNotSpecialCount] = useState(0);
  let [notSpecialForAi, setNotSpecialForAi] = useState(0);
  let [winstts, setWinStts] = useState("");

  let { gcard, ucard } = useParams();
  let picdata = Specialanimal.filter((data) => data.id == ucard);
  let picdata2 = Specialanimal.filter((data) => data.id == gcard);
  let userf = FoodCard.filter((data) => data.id == userFcard);
  let gamef = FoodCard.filter((data) => data.id == gameFcard);
  const get = async () => {
    setAccount(await loadWeb3());
  };
  const handleClose = (id) => {
    setShow(false);
    setImgId(id);
  };
  const useForceAi = async () => {
    setAccount(await loadWeb3());
    const web3 = window.web3;
    let contract = new web3.eth.Contract(abi, contractAddress);
    let Userinfo = await contract.methods.User(account).call();
    let faic = Userinfo.force_AI_card;
    if (faic == 1) {
      setforceAiCard(true);
    } else {
      toast.error("Sorry You dont Have any force Ai card");
    }
  };
  const UseSpecial = async () => {
    setAccount(await loadWeb3());
    const web3 = window.web3;
    let contract = new web3.eth.Contract(abi, contractAddress);
    let Userinfo = await contract.methods.User(account).call();
    let specialcrd = Userinfo.special;
    let ntsp = Userinfo.notspecial;
    if (specialcrd == true || ntsp == 3) {
      setOwnSpecialFood(true);
    } else {
      toast.error("Sorry You dont Have any Special card");
    }
  };
  const GetFoodCard = async () => {
    const web3 = window.web3;
    let contract = new web3.eth.Contract(abi, contractAddress);
    let Userinfo = await contract.methods.User(account).call();
    let forceAiCad = Userinfo.force_AI_card;
    let Sts = Userinfo.status;
    let spc = Userinfo.special;
    let winmsg = Userinfo.winingStatus;
    let ntspc = Userinfo.notspecial;
    setWinStts(winmsg);
    setOpacity(true);
    try {
      if (forceAiCad == 0) {
        if (Sts == true) {
          if (spc == false && ntspc < 3) {
            const web3 = window.web3;
            let contract = new web3.eth.Contract(abi, contractAddress);
            await contract.methods.Get_food().send({
              from: account,
            });
            toast.success("Transaction Successfull");
            let userInf = await contract.methods.User(account).call();
            let usr_fCard = userInf.Food_card;
            let mac_fCard = userInf.random_food_card;
            let force_ai_card = userInf.force_AI_card;
            let notSpecial = userInf.notspecial;
            let notAiSpecaial = userInf.notspecial_for_AI;
            let Specialfcard = userInf.special;
            let winmsg = userInf.winingStatus;
            let Usermount = await contract.methods.userAmount(account).call();
            let Usr_scr = Usermount.userfoodAmount;
            let Ai_scr = Usermount.gamefoodAmount;
            Ai_scr = parseInt(Ai_scr);
            Usr_scr = parseInt(Usr_scr);
            setUserScore(Usr_scr);
            setGameScore(Ai_scr);
            setgamefCard(mac_fCard);
            setuserFcard(usr_fCard);
            setNotSpecialCount(notSpecial);
            setNotSpecialForAi(notAiSpecaial);
            setOwnSpecialFood(Specialfcard);
            if (force_ai_card == 1) {
              console.log("ENterd here");
              setforceAiCard(true);
            }
            if (ownSpecialFood == true) {
              toast.success("Hurrah! You Have Got a Special Card");
            }
          } else {
            toast.success("Please use Special Card");
          }
        } else {
          toast.success(winmsg + " " + "  the bet please restart");
        }
      } else {
        toast.success("You Have A Force AI Card Use it First ");
      }
    } catch {
      toast.error("Oops! You Cancelled Transaction ");
    }
  };

  const chooseCardFor_AI1 = async (id) => {
    const web3 = window.web3;
    let contract = new web3.eth.Contract(abi, contractAddress);
    let Userinfo = await contract.methods.User(account).call();
    let force = Userinfo.force_AI_card;
    if (force == 1) {
      try {
        const web3 = window.web3;
        let contract = new web3.eth.Contract(abi, contractAddress);
        await contract.methods.chooseCardFor_AI(id).send({
          from: account,
        });
        toast.success("Transaction Successfull");
        setforceAiCard(false);
      } catch {
        toast.error(
          "Opps could Not Perform Transaction please Choose Ai Card Again "
        );
      }
    } else {
      toast.error("Sorry You dont have any force ai card");
    }
  };
  const ChooseCard = async (id) => {
    const web3 = window.web3;
    let contract = new web3.eth.Contract(abi, contractAddress);
    let Userinfo = await contract.methods.User(account).call();
    let spcl = Userinfo.special;
    let ntspc = Userinfo.notspecial;
    if (ntspc == 3 || spcl) {
      await contract.methods.chooseCard(IDBCursor).send({
        from: account,
      });
      toast.success("Transaction Successfull");
    } else {
      toast.error("Sorry You Dont Have Any Special Card");
    }
  };

  const Stop = async () => {
    const web3 = window.web3;
    let contract = new web3.eth.Contract(abi, contractAddress);
    let Userinfo = await contract.methods.User(account).call();
    let st = Userinfo.status;
    if (st == true) {
      try {
        const web3 = window.web3;
        let contract = new web3.eth.Contract(abi, contractAddress);
        await contract.methods.stop().send({
          from: account,
        });
        history.push("/");
      } catch {
        toast.error("Oops! You Cancelled Transaction ");
      }
    } else {
      toast.error("Game Already Stopped Please Return to Home Page");
    }
  };
  const chekscore = async () => {
    if (!account) {
      let acc = await loadWeb3();

      const web3 = window.web3;
      let contract = new web3.eth.Contract(abi, contractAddress);
      let winlob = await contract.methods.User(acc).call();
      let Userinfo = await contract.methods.userAmount(acc).call();
      let uscr = Userinfo.userfoodAmount;
      let bool1 = winlob.special;
      let ascr = Userinfo.gamefoodAmount;
      setOwnSpecialFood(bool1);
      setGameScore(ascr);
      setUserScore(uscr);
      if (uscr < 500 && ascr > 500) {
        toast.success(
          "Hurrah! you Won the bet! Perform last transaction For Withdrawl"
        );
        setbtnText("Withdraw");
      } else if (uscr == 500 && ascr > 500) {
        toast.success(
          "Hurrah! you Won the bet! Perform last transaction For Withdrawl"
        );
        setbtnText("Withdraw");
      } else if (uscr > 500 && ascr <= 500) {
        toast.success(
          "Alas! you Lost the bet! Perform last transaction For Withdrawl"
        );
        setbtnText("End Game");
      } else if (uscr < 500 && ascr == 500) {
        toast.success(
          "Alas! you Lost the bet! Perform last transaction For Withdrawl"
        );
        setbtnText("End Game");
      } else if (uscr > 500 && ascr > 500) {
        if (uscr < ascr) {
          toast.success(
            "Hurrah! you Won the bet! Perform last transaction For Withdrawl"
          );
          setbtnText("WithDraw");
        } else {
          toast.success(
            "Alas! you Lost the bet! Perform last transaction For Withdrawl"
          );
          setbtnText("End Game");
        }
      }
    }
  };
  useEffect(() => {
    setInterval(() => {
      get();
    }, 2000);

    chekscore();
  }, []);

  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-5">
          <div className="row">
            <div className="col-md-5 col-sm-3 col-3">
              <p className="btn-txt1 text-white text-center">You </p>
              {picdata.map((items) => {
                return (
                  <div>
                    <img
                      src={items.imgSrc}
                      alt="user Animal card"
                      width="100%"
                      height="70%"
                    />
                  </div>
                );
              })}
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <p className="btn-txt1 text-white Score">
                Your Score :{UserScore}{" "}
              </p>
              <p className="btn-txt1 text-white">
                Goit Specal food of another animal: {notSpecialCount}
              </p>
              <div>
                <Button variant="primary" className="mt-3" onClick={UseSpecial}>
                  Use Special Card
                </Button>

                <Button variant="primary" className="mt-3" onClick={useForceAi}>
                  Force Ai Card
                </Button>
              </div>

              {/* For Ai Card */}

              <Modal
                show={forceAiCard}
                onHide={chooseCardFor_AI1}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header
                  closeButton
                  style={{ backgroundColor: "#6cf768", color: "white" }}
                >
                  <Modal.Title>Force Ai Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row style={{ margin: "20px 0 0 0" }}>
                    {FoodCard.slice(6, 13).map((items) => {
                      return (
                        <Col>
                          <img
                            src={items.imgSrc}
                            alt=" Food Cards"
                            width="120%"
                            height="120%"
                            onClick={() => chooseCardFor_AI1(items.id)}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                  <Row style={{ margin: "40px 0 0 0" }}>
                    {FoodCard.slice(13, 19).map((items) => {
                      return (
                        <Col>
                          <img
                            src={items.imgSrc}
                            alt=" Food Cards"
                            width="110%"
                            height="110%"
                            onClick={() => chooseCardFor_AI1(items.id)}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>

              {/* FOr Ai CArd end */}

              <Modal
                show={ownSpecialFood}
                onHide={handleClose}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header
                  closeButton
                  style={{ backgroundColor: "#6cf768", color: "white" }}
                >
                  <Modal.Title>Special Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row style={{ margin: "20px 0 0 0" }}>
                    {FoodCard.slice(6, 13).map((items) => {
                      return (
                        <Col>
                          <img
                            src={items.imgSrc}
                            alt=" Food Cards"
                            width="120%"
                            height="120%"
                            onClick={() => ChooseCard(items.id)}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                  <Row style={{ margin: "40px 0 0 0" }}>
                    {FoodCard.slice(13, 19).map((items) => {
                      return (
                        <Col>
                          <img
                            src={items.imgSrc}
                            alt=" Food Cards"
                            width="110%"
                            height="110%"
                            onClick={() => ChooseCard(items.id)}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="row">
            <div className="col-md-5 col-sm-3 col-3">
              <p className="btn-txt1 text-white text-center">AI </p>
              {picdata2.map((items) => {
                return (
                  <div>
                    <img
                      src={items.imgSrc}
                      alt="Ai Animal Card"
                      width="100%"
                      height="70%"
                    />
                  </div>
                );
              })}
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <p className="btn-txt1 text-white Score">
                AI Score : {GameScore}{" "}
              </p>
              <p className="btn-txt1 text-white">
                Goit Specal food of another animal: {notSpecialForAi}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 col-6">
          <button
            className="btn btn-success btn-block btn-lg buton"
            onClick={() => GetFoodCard()}
          >
            Get Food Card{" "}
          </button>
          <Button
            className="btn btn-success btn-lg btn-block"
            onClick={() => Stop()}
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "flex-end",
              marginTop: 15,
            }}
          >
            Stop
          </Button>
        </div>
      </div>
      {Opacity ? (
        <div className="row  mt-2 ">
          <div className="col-md-3">
            <div className="nm">
              You{" "}
              <span>
                <AiOutlineArrowRight />
              </span>{" "}
            </div>
          </div>
          <div className="col-md-3">
            {userf.map((items) => {
              return (
                <div>
                  <img
                    src={items.imgSrc}
                    alt="User Food Card"
                    width="100%"
                    height="70%"
                  />
                </div>
              );
            })}
          </div>

          <div className="col-md-3">
            {gamef.map((items) => {
              return (
                <div>
                  <img
                    src={items.imgSrc}
                    alt="Ai Food Card"
                    width="100%"
                    height="70%"
                  />
                </div>
              );
            })}
          </div>
          <div className="col-md-1">
            <div className="nm">
              <span>
                <AiOutlineArrowLeft />
              </span>{" "}
              AI
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
