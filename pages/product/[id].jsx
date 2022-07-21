import React from "react";
import DetailsThumb from "../../components/DetailsThumb";
import { HomeOutlined } from "@material-ui/icons";
import Link from "next/link";

class Index extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Chalet",
        src: [
          "/assets/img/1.jpg",
          "/assets/img/2.jpg",
          "/assets/img/3.jpg",
          "/assets/img/6.jpg",
          "/assets/img/5.png",
          "/assets/img/7.png",
        ],
        description: "UI/UX designing, html css tutorials",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae perferendis culpa asperiores consectetur excepturi, error aliquid ab quaerat? Quo, dolores?",
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();
  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="produt">
        <div className="backIcon">
          {" "}
          <Link href="/">
            <HomeOutlined
              fontSize="large"
              style={{
                cursor: "pointer",
                margin: "10px",
                color: "#478ac9",
              }}
            />
          </Link>
        </div>

        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                {/* <span>${item.price}</span> */}
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>

              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <button className="mainSecionBtn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Index;
