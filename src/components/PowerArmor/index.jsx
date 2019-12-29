import React from "react";
import { T_45, T_51, T_60, X_01 } from "../../constants/imgs";
import "./powerarmor.scss";

export default () => {
  return (
    <section className="powerArmor">
      <div className="powerArmor__item">
        <h2>Servoarmaduras</h2>
        <p>
          La servoarmadura en fallout 4 posee otros mecanismos que en fallout 3
          y fallout: new vegas no existen.Las servoarmadura ahora necesitan del
          Armazón de servoarmadura , parte fundamental ya que es en este donde
          se montaran las partes de la servoarmadura , ademas que puede ofrecer
          ventajas como la de no recibir daño a caídas de gran altura. Las
          partes de servoarmadura pueden ser las piernas y brazos derechos e
          izquierdos , el torso y el casco , las cuales pueden tener diferentes
          ventajas.
        </p>
      </div>
      <div className="powerArmor__item">
        <h3>Servoarmadura T-45</h3>
        <div className="powerArmor__item--description">
          <p>
            La servoarmadura T-45 es uno de los primeros traje de armadura de la
            energía desplegada por el Ejército de los Estados Unidos, y como
            tal, sigue siendo relativamente común más de 200 años más tarde.
          </p>
          <div>
            <img src={T_45} alt="" />
          </div>
        </div>
      </div>
      <div className="powerArmor__item">
        <h3>Servoarmadura T-51</h3>
        <div className="powerArmor__item--description">
          <p>
            La Servoarmadura T-51 es el conjunto de armadura más difícil de
            encontrar en la Commonwealth, ademas tiene una variante de la
            facción del Ferrocarril. Tiene un diseño más "ligero",con menos
            detalles en las partes de arriba,(torso y hombros) y más voluminoso
            y con más líneas y relieve por las partes bajas,(piernas y
            brazos).Tiene un casco más "flaco" o "delgado" que otros modelos,con
            unas lentes más finas y poco relieve.
          </p>
          <div>
            <img src={T_51} alt="" />
          </div>
        </div>
      </div>
      <div className="powerArmor__item">
        <h3>Servoarmadura X-01</h3>
        <div className="powerArmor__item--description">
          <p>
            La servoarmadura x-01 es un conjunto creado por los restos del
            ejército de Estados Unidos después de los acontecimientos de la Gran
            Guerra, Ofrece ventajas superiores a las otras armaduras de antes de
            la guerra, ofreciendo capacidad de protección superiores. A
            diferencia de las otras servoarmaduras ,esta tiene en cada brazo una
            hombrera, que pareciera estar unida al pecho o torso y a la espalda
          </p>
          <div>
            <img src={X_01} alt="" />
          </div>
        </div>
      </div>
      <div className="powerArmor__item">
        <h3>Servoarmadura T-60</h3>
        <div className="powerArmor__item--description">
          <p>
            La Servoarmadura T-60 junto con el Modelo T-45 ,el más común de
            encontrar en la Commonwealth, pues es usado tanto por la Hermandad
            del Acero de la Commonwealth y por los Gatos Atómicos, junto con las
            piezas sueltas que se puedan encontrar por el Yermo. Es muy similar
            a la T-45 ,pero es muchísimo más robusta que esta.Con muchas líneas
            y relieves por todas las partes,lo cuál hace ver más imponente a
            este modelo de servoarmadura.
          </p>
          <div>
            <img src={T_60} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
