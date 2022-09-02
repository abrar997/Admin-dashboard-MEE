import React from "react";
import { Navbar, Sidebar } from "../../components";
import "./New.scss";
import { icons, images } from "../../assets";
const New = ({ input, title }) => {
  const [file, setFile] = React.useState("");
  console.log(file);
  return (
    <div className="list__user-addnew">
      <Sidebar />
      <div className="list__user-addnew_container">
        <Navbar />
        <div className="list__user-addnew_container-top">
          <h3> {title}</h3>
        </div>
        <div className="list__user-addnew_container-bottom">
          <div className="list__user-addnew_container-bottom_left">
            <img src={file?URL.createObjectURL(file):images.noimg} />
          </div>

          {/* form data enter */}
          <div className="list__user-addnew_container-bottom_right">
            <form>
              <div className="form-control">
                <label htmlFor="file">
                  Image: <icons.RiUpload2Line title="upload image" />{" "}
                </label>
                <input
                  type="file"
                  id="file"
                  required
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {input.map((item) => {
                return (
                  <div className="form-control" key={item.id}>
                    <label htmlFor="file">{item.label}</label>
                    <input
                      type={item.type}
                      required
                      placeholder={item.placeholder}
                    />
                  </div>
                );
              })}

              <button className=" customer-button"> Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
