import React from "react";

//name='' onChange={props} value={props}
export default function InputData(props) {
  return (
    <React.Fragment>
      <h2>Pida con confianza</h2>
      <p>Somos los más cumplidos del mercado</p>

      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>
            <input type="text" placeholder="" required />
          </label>
        </div>

        <div className="form-group">
          <label>
            <input type="text" placeholder="" required />
          </label>
        </div>
        <button className="btn btn-1" type="submit">
          button1
        </button>
      </form>
      <button className="btn btn-2">button2</button>
    </React.Fragment>
  );
}
