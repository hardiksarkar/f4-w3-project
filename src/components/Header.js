import React, { useState, useEffect } from "react";
import "./header.css";
import userImg from "../images/header-img.jpeg";

export default function Header({ setMorebooks }) {
  const bookApi = "https://www.googleapis.com/books/v1/volumes?q=";
  // console.log(setMorebooks);

  useEffect(() => {
    getMoreBooks();
  }, []);

  let [searchInput, setSearchInput] = useState("");

  async function getMoreBooks() {
    const moreBooksData = await fetch(
      `${bookApi}${searchInput ? searchInput.trim() : "Sherlock Holmes"}`
    );
    const booksData = await moreBooksData.json();
    setMorebooks(booksData.items);
    // console.log(booksData.items);
    setSearchInput("");
  }

  const enterKeyFunc = (e) => {
    if(searchInput.trim()==""){
      return;
    }
    if (e.key === "Enter") {
      getMoreBooks();
    }
  };

  return (
    <div className="header">
      <div className="logo-div">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="95"
          height="65"
          viewBox="0 0 95 65"
          fill="none"
        >
          <path
            d="M65.6744 31.8935C65.7037 35.3311 65.0885 38.7436 63.8605 41.9545C75.7147 39.5931 82.9649 35.951 82.9595 31.8738V31.8694C82.9516 27.7932 75.694 24.1718 63.8369 21.8405C65.0719 25.0471 65.6952 28.4568 65.6744 31.893V31.8935Z"
            fill="url(#paint0_linear_5_69)"
          />
          <path
            d="M9.64459 32.1325L9.6377 26.9446C1.51629 28.2534 -0.0029335 30.1038 2.28882e-05 32.1493C0.00297928 34.1948 1.52762 36.0324 9.651 37.3234L9.64459 32.1325Z"
            fill="url(#paint1_linear_5_69)"
          />
          <path
            d="M32.7414 44.7466C38.8089 44.5342 45.1854 44.1144 51.8369 43.426C55.2459 43.0731 58.5639 42.6699 61.791 42.2162C64.3558 35.5767 64.3472 28.2183 61.7668 21.5847C58.5089 21.1422 55.1597 20.748 51.7192 20.4021C45.0174 19.7319 38.5906 19.3278 32.4723 19.1287C28.2345 13.3978 20.1964 9.4408 9.65148 9.4541L9.6638 18.978C9.6638 20.7204 10.1073 21.7577 11.8847 21.7577L11.9182 21.7518L11.931 31.963L11.9444 42.5084C10.0625 42.5084 9.69435 43.5048 9.69681 45.2546L9.70864 54.8145C20.4551 54.7997 28.6312 50.6663 32.7414 44.7466ZM58.6904 31.9019C58.6915 32.6852 58.4603 33.4511 58.026 34.1029C57.5918 34.7548 56.974 35.2632 56.2508 35.5638C55.5276 35.8645 54.7314 35.944 53.9631 35.7922C53.1947 35.6405 52.4886 35.2642 51.9341 34.7111C51.3795 34.158 51.0014 33.4529 50.8476 32.6849C50.6938 31.9169 50.7713 31.1206 51.0701 30.3966C51.3689 29.6726 51.8757 29.0536 52.5263 28.6176C53.177 28.1816 53.9423 27.9484 54.7255 27.9474C55.7757 27.9462 56.7833 28.3622 57.5268 29.1038C58.2703 29.8453 58.6889 30.8518 58.6904 31.9019ZM45.7901 31.9187C45.791 32.7018 45.5599 33.4676 45.1253 34.1193C44.6912 34.771 44.0737 35.2792 43.3503 35.5798C42.6274 35.8804 41.8311 35.9598 41.0629 35.808C40.2946 35.6561 39.589 35.2799 39.0346 34.7269C38.4798 34.1738 38.1018 33.4688 37.948 32.7009C37.7943 31.933 37.8722 31.1368 38.1708 30.413C38.4694 29.6891 38.976 29.0701 39.6269 28.6342C40.2774 28.1983 41.0427 27.9652 41.8257 27.9642C42.8758 27.963 43.8835 28.379 44.6266 29.1205C45.3702 29.8622 45.7886 30.8686 45.7901 31.9187ZM24.9704 31.9453C24.9694 31.1622 25.2005 30.3964 25.6351 29.7447C26.0692 29.0931 26.6867 28.5848 27.4101 28.2842C28.133 27.9836 28.9293 27.9043 29.6975 28.0561C30.4658 28.2079 31.1714 28.5841 31.7263 29.1372C32.2807 29.6902 32.6586 30.3952 32.8124 31.1631C32.9661 31.931 32.8887 32.7272 32.5896 33.451C32.291 34.1749 31.7844 34.7939 31.1335 35.2298C30.483 35.6657 29.7177 35.8989 28.9347 35.8998C28.4148 35.9005 27.8999 35.7987 27.4189 35.6003C26.9385 35.4019 26.5014 35.1107 26.1333 34.7435C25.7652 34.3762 25.473 33.9401 25.2734 33.4598C25.0738 32.9796 24.9703 32.4648 24.9699 31.9448L24.9704 31.9453Z"
            fill="url(#paint2_linear_5_69)"
          />
          <path
            d="M57.0391 31.9064C57.0295 31.3 56.7817 30.7217 56.3492 30.2966C55.9167 29.8714 55.3343 29.6335 54.7278 29.6343C54.1214 29.6351 53.5395 29.8745 53.1081 30.3007C52.6767 30.727 52.4304 31.3059 52.4223 31.9123C52.4231 32.5245 52.6671 33.1113 53.1005 33.5437C53.534 33.9761 54.1215 34.2185 54.7337 34.2177C55.3459 34.2169 55.9328 33.973 56.3651 33.5395C56.7975 33.1061 57.0399 32.5186 57.0391 31.9064Z"
            fill="url(#paint3_linear_5_69)"
          />
          <path
            d="M44.1388 31.9231V31.9187C44.1294 31.3123 43.8816 30.734 43.4489 30.3088C43.0162 29.8837 42.4338 29.6458 41.8277 29.6466C41.2211 29.6474 40.6391 29.8867 40.2079 30.313C39.7763 30.7393 39.5299 31.3182 39.522 31.9246C39.5225 32.5369 39.7664 33.1238 40.2 33.5563C40.6332 33.9888 41.2211 34.2314 41.8331 34.2308C42.4456 34.2301 43.0325 33.9863 43.4647 33.5528C43.8973 33.1194 44.1398 32.5319 44.1393 31.9197L44.1388 31.9231Z"
            fill="url(#paint4_linear_5_69)"
          />
          <path
            d="M31.2379 31.9394V31.9369C31.2286 31.3305 30.9807 30.7522 30.548 30.3271C30.1154 29.902 29.5329 29.664 28.9268 29.6648C28.3202 29.6656 27.7382 29.905 27.3071 30.3313C26.8754 30.7575 26.629 31.3364 26.6211 31.9428C26.6221 32.555 26.8655 33.1419 27.2992 33.5743C27.7328 34.0067 28.3202 34.2492 28.9322 34.2485C29.5442 34.2478 30.1311 34.0039 30.5638 33.5705C30.996 33.1371 31.2384 32.5496 31.2379 31.9374V31.9394Z"
            fill="url(#paint5_linear_5_69)"
          />
          <path
            d="M64.1335 44.4031C73.9274 42.4517 85.6062 38.6933 85.6062 31.8664V31.7989C85.5426 26.3439 78.3087 22.1627 64.1045 19.3702L64.0739 19.3643L59.632 18.5837C57.623 18.2678 55.5376 17.987 53.4152 17.746C52.9931 17.6981 52.5676 17.6515 52.1389 17.6065C49.2917 17.3079 46.3015 17.0729 43.2315 16.9053C43.8835 16.0602 44.5881 15.2572 45.3416 14.5011C48.9201 10.9179 53.5085 8.51432 58.4916 7.61249C63.4748 6.71067 68.6145 7.35369 73.2218 9.45542C77.8292 11.5571 81.684 15.017 84.2695 19.3713C86.855 23.7256 88.0475 28.7663 87.6874 33.8175C87.3273 38.8688 85.4316 43.6892 82.2546 47.6327C79.0775 51.5764 74.7709 54.4542 69.9119 55.8808C65.053 57.3079 59.874 57.2152 55.0693 55.6157C50.2645 54.0157 46.0635 50.9856 43.0295 46.931C46.1783 46.7556 49.2488 46.5078 52.1749 46.1919C52.602 46.1456 53.0274 46.0981 53.4512 46.0495C55.5701 45.8031 57.656 45.5192 59.6601 45.198L64.1335 44.4031Z"
            fill="url(#paint6_linear_5_69)"
          />
          <path
            d="M94.999 32.0236C94.9799 24.9327 92.6141 18.0475 88.2708 12.4424C83.9275 6.8372 77.851 2.82739 70.9894 1.03855C64.1278 -0.750281 56.867 -0.217525 50.3399 2.55371C43.813 5.32493 38.3866 10.1788 34.9081 16.3578C36.245 16.4235 37.5671 16.4965 38.8735 16.5766C41.2886 12.8393 44.5384 9.71392 48.3673 7.44652C52.7087 4.88408 57.6505 3.51528 62.6917 3.47895C67.7327 3.44263 72.6938 4.74007 77.0717 7.2397C81.4496 9.7393 85.0886 13.3522 87.6197 17.7119C90.1508 22.0717 91.484 27.0233 91.484 32.0645C91.484 37.1058 90.1508 42.0574 87.6197 46.4171C85.0886 50.7766 81.4496 54.3897 77.0717 56.8895C72.6938 59.3889 67.7327 60.6863 62.6917 60.6499C57.6505 60.6139 52.7087 59.245 48.3673 56.6825C44.4379 54.3557 41.12 51.126 38.6877 47.2607C37.3878 47.3409 36.075 47.4149 34.749 47.4829C38.1752 53.7367 43.5864 58.6719 50.1283 61.5093C56.6705 64.3467 63.9712 64.9252 70.8784 63.1527C77.7856 61.3807 83.906 57.3586 88.2738 51.7218C92.6417 46.0853 95.0082 39.1546 95 32.0236H94.999Z"
            fill="url(#paint7_linear_5_69)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5_69"
              x1="1.45905"
              y1="31.8975"
              x2="64.5444"
              y2="31.8975"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1153FC" />
              <stop offset="1" stopColor="#5581F1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5_69"
              x1="1.44779"
              y1="32.134"
              x2="64.5363"
              y2="32.134"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1153FC" />
              <stop offset="1" stopColor="#5581F1" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_5_69"
              x1="1.43496"
              y1="32.1343"
              x2="64.5192"
              y2="32.1343"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1153FC" />
              <stop offset="1" stopColor="#5581F1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_5_69"
              x1="1.45269"
              y1="31.926"
              x2="64.5415"
              y2="31.926"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1153FC" />
              <stop offset="1" stopColor="#5581F1" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_5_69"
              x1="1.45221"
              y1="31.9387"
              x2="64.5385"
              y2="31.9387"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1153FC" />
              <stop offset="1" stopColor="#5581F1" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_5_69"
              x1="1.4502"
              y1="31.9567"
              x2="64.5389"
              y2="31.9567"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1153FC" />
              <stop offset="1" stopColor="#5581F1" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_5_69"
              x1="1.48371"
              y1="32.0513"
              x2="64.5402"
              y2="32.0513"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1153FC" />
              <stop offset="1" stopColor="#5581F1" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_5_69"
              x1="1.43004"
              y1="32.08"
              x2="64.513"
              y2="32.08"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1153FC" />
              <stop offset="1" stopColor="#5581F1" />
            </linearGradient>
          </defs>
        </svg>
        <p className="keazon">
          KeazoN<span className="books">BOOKS</span>
        </p>
      </div>
      <div className="search-div">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none">
          <path
            d="M23.0953 21.6963L16.5014 15.1023C17.5246 13.7795 18.0781 12.1621 18.0781 10.4609C18.0781 8.42461 17.2834 6.51523 15.8463 5.07559C14.4092 3.63594 12.4947 2.84375 10.4609 2.84375C8.42715 2.84375 6.51269 3.63848 5.07559 5.07559C3.63594 6.51269 2.84375 8.42461 2.84375 10.4609C2.84375 12.4947 3.63848 14.4092 5.07559 15.8463C6.51269 17.2859 8.42461 18.0781 10.4609 18.0781C12.1621 18.0781 13.777 17.5246 15.0998 16.5039L21.6937 23.0953C21.7131 23.1147 21.736 23.13 21.7613 23.1405C21.7866 23.1509 21.8137 23.1563 21.841 23.1563C21.8684 23.1563 21.8954 23.1509 21.9207 23.1405C21.946 23.13 21.9689 23.1147 21.9883 23.0953L23.0953 21.9908C23.1147 21.9715 23.13 21.9485 23.1405 21.9233C23.1509 21.898 23.1563 21.8709 23.1563 21.8436C23.1563 21.8162 23.1509 21.7891 23.1405 21.7638C23.13 21.7386 23.1147 21.7156 23.0953 21.6963ZM14.4828 14.4828C13.4062 15.5568 11.9793 16.1484 10.4609 16.1484C8.94258 16.1484 7.51562 15.5568 6.43906 14.4828C5.36504 13.4062 4.77344 11.9793 4.77344 10.4609C4.77344 8.94258 5.36504 7.51309 6.43906 6.43906C7.51562 5.36504 8.94258 4.77344 10.4609 4.77344C11.9793 4.77344 13.4088 5.3625 14.4828 6.43906C15.5568 7.51562 16.1484 8.94258 16.1484 10.4609C16.1484 11.9793 15.5568 13.4088 14.4828 14.4828Z"
            fill="#808080"
          />
        </svg>
        <input
          type="text"
          name="search"
          id="search-input"
          placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          onKeyDown={(e) => enterKeyFunc(e)}
          tabIndex="0"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button className="search-btn" onClick={getMoreBooks}>
          Search
        </button>
      </div>
      <div className="more-div">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M5 13.3333V31.6667C5 35.335 7.99 36.6667 10 36.6667H35V33.3333H10.02C9.25 33.3133 8.33333 33.01 8.33333 31.6667C8.33333 30.3233 9.25 30.02 10.02 30H35V6.66668C35 4.82834 33.505 3.33334 31.6667 3.33334H10C7.99 3.33334 5 4.66501 5 8.33334V13.3333ZM10 6.66668H31.6667V26.6667H8.33333V8.33334C8.33333 6.99001 9.25 6.68668 10 6.66668Z"
            fill="#E7E2E2"
            fillOpacity="0.81"
          />
          <path
            d="M19.995 23.3333L25.5783 17.8517C25.9226 17.5206 26.1964 17.1234 26.3835 16.684C26.5706 16.2445 26.667 15.7718 26.667 15.2942C26.667 14.8165 26.5706 14.3438 26.3835 13.9044C26.1964 13.4649 25.9226 13.0677 25.5783 12.7367C24.8843 12.0517 23.9484 11.6676 22.9733 11.6676C21.9982 11.6676 21.0623 12.0517 20.3683 12.7367L19.995 13.1L19.6217 12.735C18.9279 12.0501 17.9923 11.6661 17.0175 11.6661C16.0427 11.6661 15.1071 12.0501 14.4133 12.735C14.0691 13.0661 13.7952 13.4632 13.6081 13.9027C13.4211 14.3422 13.3246 14.8149 13.3246 15.2925C13.3246 15.7701 13.4211 16.2428 13.6081 16.6823C13.7952 17.1217 14.0691 17.5189 14.4133 17.85L19.995 23.3333Z"
            fill="#E7E2E2"
            fillOpacity="0.81"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M32.15 28.8167L30 26.6667V18.3333C30 13.2167 27.2667 8.93332 22.5 7.79999V6.66666C22.5 5.28332 21.3834 4.16666 20 4.16666C18.6167 4.16666 17.5 5.28332 17.5 6.66666V7.79999C12.7167 8.93332 10 13.2 10 18.3333V26.6667L7.85002 28.8167C6.80002 29.8667 7.53336 31.6667 9.01669 31.6667H30.9667C32.4667 31.6667 33.2 29.8667 32.15 28.8167ZM26.6667 28.3333H13.3334V18.3333C13.3334 14.2 15.85 10.8333 20 10.8333C24.15 10.8333 26.6667 14.2 26.6667 18.3333V28.3333ZM20 36.6667C21.8334 36.6667 23.3334 35.1667 23.3334 33.3333H16.6667C16.6667 34.2174 17.0179 35.0652 17.643 35.6903C18.2681 36.3155 19.116 36.6667 20 36.6667Z"
            fill="#E7E2E2"
            fillOpacity="0.81"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.142 6.486C10.2309 6.33776 10.3566 6.21507 10.507 6.12989C10.6573 6.04472 10.8272 5.99996 11 6H29C29.1728 5.99996 29.3427 6.04472 29.4931 6.12989C29.6435 6.21507 29.7692 6.33776 29.858 6.486L35.858 16.486C35.9645 16.6639 36.0131 16.8706 35.997 17.0773C35.9808 17.2841 35.9008 17.4807 35.768 17.64L34.954 18.616C34.4047 17.8086 33.6659 17.148 32.8023 16.692C31.9387 16.236 30.9766 15.9984 30 16H33.234L28.434 8H24.476L27.676 16H30C28.222 16 26.626 16.772 25.528 18H14.46L20 32.24L20.06 32.086L20.08 32.26C20.2164 33.3213 20.5487 34.3481 21.06 35.288L20.768 35.64C20.6742 35.7525 20.5567 35.8431 20.424 35.9052C20.2913 35.9673 20.1466 35.9995 20 35.9995C19.8535 35.9995 19.7087 35.9673 19.576 35.9052C19.4433 35.8431 19.3259 35.7525 19.232 35.64L4.23203 17.64C4.09922 17.4807 4.01921 17.2841 4.00309 17.0773C3.98696 16.8706 4.03552 16.6639 4.14203 16.486L10.142 6.486ZM11.566 8L6.76603 16H12.324L15.524 8H11.566ZM16.85 29.658L12.316 18H7.13603L16.85 29.658ZM17.678 8L14.478 16H25.522L22.322 8H17.68H17.678ZM22.472 33.596C22.2714 33.0827 22.1344 32.5467 22.064 32C22.0209 31.6684 21.9995 31.3344 22 31C22 30.2044 22.3161 29.4413 22.8787 28.8787C23.4413 28.3161 24.2044 28 25 28H35C35.7957 28 36.5587 28.3161 37.1213 28.8787C37.684 29.4413 38 30.2044 38 31C38 33.232 37.082 35.02 35.576 36.23C34.094 37.42 32.106 38 30 38C27.894 38 25.906 37.42 24.424 36.23C23.5542 35.5378 22.8812 34.6296 22.472 33.596ZM27.262 19.084C27.98 18.412 28.942 18 30 18C30.8125 17.9984 31.6061 18.2454 32.274 18.708C32.8056 19.0772 33.2401 19.5693 33.5406 20.1424C33.8411 20.7156 33.9987 21.3528 34 22C34 23.0609 33.5786 24.0783 32.8285 24.8284C32.0783 25.5786 31.0609 26 30 26C28.9392 26 27.9217 25.5786 27.1716 24.8284C26.4215 24.0783 26 23.0609 26 22C26 20.85 26.486 19.814 27.262 19.084Z"
            fill="#E7E2E2"
            fillOpacity="0.81"
          />
        </svg>
        <div className="user-div">
          <img src={userImg} alt="User" className="user-img" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
          >
            <path
              d="M7.29289 8.70714C7.68342 9.09766 8.31658 9.09766 8.70711 8.70714L15.0711 2.34318C15.4616 1.95265 15.4616 1.31949 15.0711 0.928963C14.6805 0.538438 14.0474 0.538438 13.6569 0.928963L8 6.58582L2.34315 0.928963C1.95262 0.538438 1.31946 0.538438 0.928932 0.928963C0.538408 1.31949 0.538408 1.95265 0.928932 2.34318L7.29289 8.70714ZM7 7.00003V8.00003H9V7.00003H7Z"
              fill="#C3BEBE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
