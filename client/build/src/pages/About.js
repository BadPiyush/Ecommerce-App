import React from "react";
import Layout from "../components/Layout/Layout";

export default function About() {
  return (
    <Layout title={"About us- ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "95%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We believe that shopping should be enjoyable, hassle-free, and
            tailored to your unique preferences. Whether you're searching for
            the latest fashion trends, high-quality electronics, home decor
            items, or personalized gifts, our extensive collection has something
            for everyone. With a user-friendly interface, intuitive navigation,
            and advanced search filters, finding your desired products is quick
            and effortless. Start exploring our vast selection today and
            discover the joy of shopping with us! <br />
            <p>
              {" "}
              Happy shopping, <br /> Ecommerce App Team{" "}
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
}
