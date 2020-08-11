import React, { Component } from "react";
import service from "../services/mobileApi";
import queryString from "query-string";
import ShowItems from "./showitems";
import LeftPannel from "./leftPannel";
import Pagination from "./paggination";
import NavBar from "../components/navBar";
class ShowData extends Component {
  state = {
    data: [],
    sortBy: "",
    ass: [{ id: "true", val: "true" }],
    maxpage: 0,
    page: 0,

    price: [
      { id: "0-5000", val: "0-5000" },
      { id: "5000-10000", val: "5000-10000" },
      { id: "1000020,000", val: "10000-20000" },
      { id: "More than 20000", val: ">20000" },
    ],

    ram: [
      { id: "6 GB and More", val: ">6" },
      { id: "4 GB", val: "<4" },
      { id: "3 GB", val: "<3" },
      { id: "2 GB", val: "<2" },
    ],
    rating: [
      { id: "4", val: ">4" },
      { id: "3", val: ">3" },
      { id: "2", val: ">2" },
      { id: "1", val: ">1" },
    ],
  };

  async componentDidMount() {
    let search = this.props.location.search;

    let parm = this.props.match.params;

    if (parm.catg === "Mobiles") {
      let { data, pageInfo } = await service.getAllProducts(
        parm.catg,
        parm.brand,
        search
      );
      let maxpage = pageInfo.numberOfPages;
      let page = pageInfo.pageNumber;
      console.log(data, pageInfo);
      this.setState({ data, page, maxpage });
    } else {
      let { data, pageInfo } = await service.getAllProductsLap(
        parm.catg,
        parm.brand,
        search
      );
      let maxpage = pageInfo.numberOfPages;
      let page = pageInfo.pageNumber;
      console.log(data, pageInfo);
      this.setState({ data, page, maxpage });
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      let search = this.props.location.search;

      let parm = this.props.match.params;
      if (parm.catg === "Mobiles") {
        const { data, pageInfo } = await service.getAllProducts(
          parm.catg,
          parm.brand,
          search
        );
        let maxpage = pageInfo.numberOfPages;
        let page = pageInfo.pageNumber;

        this.setState({ data, maxpage, page });
        console.log(data, pageInfo);
      } else {
        const { data, pageInfo } = await service.getAllProductsLap(
          parm.catg,
          parm.brand,
          search
        );
        let maxpage = pageInfo.numberOfPages;
        let page = pageInfo.pageNumber;

        this.setState({ data, maxpage, page });
        console.log(data, pageInfo);
      }
    }
  }

  handledLike = (index) => {
    var data = [...this.state.data];
    data[index] = { ...data[index] };
    data[index].liked = !data[index].liked;
    this.setState({ data });
  };

  handleSort = (sortBy) => {
    console.log(sortBy);
    this.setState({ sortBy });
    this.sortArray(sortBy);
  };

  sortArray(sortBy) {
    let l = "";
    l =
      sortBy === "Popularity"
        ? "popularity"
        : sortBy === "Price High to Low"
        ? "asc"
        : "desc";
    let { ram, rating, assured, price, q, page } = queryString.parse(
      this.props.location.search
    );
    ram = ram ? ram : "";
    rating = rating ? rating : "";
    assured = assured ? assured : "";
    price = price ? price : "";
    q = q ? q : "";
    page = page ? page : "";

    this.callUrl("", ram, assured, rating, price, q, page, l);
  }

  makeCbStructure(array, parameter) {
    let temp = array.map((n1) => ({
      id: n1.id,
      val: n1.val,
      isSelected: false,
    }));

    let cnames = parameter.split(",");

    for (let i = 0; i < cnames.length; i++) {
      let obj = temp.find((n1) => n1.id === cnames[i] || n1.val === cnames[i]);
      if (obj) obj.isSelected = true;
    }
    return temp;
  }

  addToParam(params, newParamName, newParamValue) {
    if (newParamValue) {
      if (params) params = params + "&";
      else params = params + "?";
      params = params + newParamName + "=" + newParamValue;
    }
    return params;
  }

  handleOptionChange = (
    sportsRadio1,
    sportsRadio2,
    sportsRadio3,
    sportsRadio4
  ) => {
    let { q, sort } = queryString.parse(this.props.location.search);
    q = q ? q : "";
    sort = sort
      ? sort
      : this.state.sortBy === "Popularity"
      ? "popularity"
      : this.state.sortBy === "Price High to Low"
      ? "asc"
      : "desc";
    let l = "";

    let filterNames1 = sportsRadio1.filter((n1) => n1.isSelected);
    let arrayNames1 = filterNames1.map((n1) => n1.val);
    let assured = arrayNames1.join(",");
    let filterNames2 = sportsRadio2.filter((n1) => n1.isSelected);
    let arrayNames2 = filterNames2.map((n1) => n1.val);
    let ram = arrayNames2.join(",");
    let filterNames3 = sportsRadio3.filter((n1) => n1.isSelected);
    let arrayNames3 = filterNames3.map((n1) => n1.val);
    let rating = arrayNames3.join(",");
    let filterNames4 = sportsRadio4.filter((n1) => n1.isSelected);
    let arrayNames4 = filterNames4.map((n1) => n1.val);
    let price = arrayNames4.join(",");

    this.callUrl("", ram, assured, rating, price, q, 1, sort);
  };

  callUrl = (params, ram, assured, rating, price, q, page, sort) => {
    let path = this.props.location.pathname;
    params = this.addToParam(params, "ram", ram);
    params = this.addToParam(params, "rating", rating);
    params = this.addToParam(params, "assured", assured);
    params = this.addToParam(params, "price", price);
    params = this.addToParam(params, "q", q);
    params = this.addToParam(params, "page", page);
    params = this.addToParam(params, "sort", sort);
    this.props.history.push({
      pathname: path,
      search: params,
    });
  };

  handlePage = (x) => {
    let { ram, assured, rating, price, q, sort } = queryString.parse(
      this.props.location.search
    );
    ram = ram ? ram : "";
    assured = assured ? assured : "";
    rating = rating ? rating : "";
    price = price ? price : "";
    q = q ? q : "";
    sort = sort ? sort : "";

    let page1 = this.state.page;
    let currPage = page1 ? +page1 : 1;
    currPage = x;
    this.setState({ currentPage: currPage });

    this.callUrl("", ram, assured, rating, price, q, currPage, sort);
  };

  handleProduct = (item) => {
    this.props.history.push({
      pathname: "/home/" + item.category + "/" + item.brand + "/" + item.id,
    });
  };

  render() {
    let { ram, rating, assured, price } = queryString.parse(
      this.props.location.search
    );
    ram = ram ? ram : "";
    rating = rating ? rating : "";
    assured = assured ? assured : "";
    price = price ? price : "";

    let sportsRadio1 = this.makeCbStructure(this.state.ass, assured);
    let sportsRadio2 = this.makeCbStructure(this.state.ram, ram);
    let sportsRadio3 = this.makeCbStructure(this.state.rating, rating);
    let sportsRadio4 = this.makeCbStructure(this.state.price, price);

    let parm = this.props.match.params;

    return (
      <React.Fragment>
        <NavBar />
        <div className="row mt-2">
          <div className="col-2 ml-2 d-none d-lg-block">
            <LeftPannel
              sportsRadio1={sportsRadio1}
              sportsRadio2={sportsRadio2}
              sportsRadio3={sportsRadio3}
              sportsRadio4={sportsRadio4}
              onChange={this.handleOptionChange}
              cat={parm.catg}
            />{" "}
          </div>
          <div className="col-lg-9 col-12 bg-white ml-1">
            <ShowItems
              onLike={this.handledLike}
              catg={parm.catg}
              brand={parm.brand}
              sortBy={this.state.sortBy}
              data={this.state.data}
              onSort={this.handleSort}
              onImgClick={this.handleProduct}
            />
            {this.state.maxpage !== 0 ? (
              <div className="row">
                <div className="col-lg-2 col-4">
                  Page {this.state.page} of {this.state.maxpage}{" "}
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                  }}
                  className="col-8 p-0 text-center"
                >
                  <Pagination
                    itemsCount={this.state.maxpage}
                    pageSize={+5}
                    currentPage={this.state.page}
                    onPageChange={this.handlePage}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowData;
