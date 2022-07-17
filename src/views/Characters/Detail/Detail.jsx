import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../store/context";

const Detail = () => {
  const { store, actions } = useContext(Context);
  const { characterId } = useParams();
  useEffect(() => {
    actions.setCharacter(characterId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
          <div className="card border-0 shadow">
            <img src={store.character?.image} alt="..." />
            <div className="card-body p-1-9 p-xl-5">
              <div className="mb-4">
                <h3 className="h4 mb-0">{store.character?.name}</h3>
                <span className="text-primary">{store.character?.gender}</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-3">
                  <p>{store.character?.species}</p>
                </li>
                <li className="mb-3"></li>
                <li>
                  <p>{store.character?.status}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="ps-lg-1-6 ps-xl-5">
            <div className="mb-5 wow fadeIn">
              <div className="text-start mb-1-6 wow fadeIn">
                <h2 className="h1 mb-0 text-primary">#About Me</h2>
              </div>
              <p>{store.character?.location.name}</p>
              <p className="mb-0">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
