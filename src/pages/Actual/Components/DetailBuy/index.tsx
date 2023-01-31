import React, { useState } from "react";
import { Button } from 'antd-mobile'
import "./index.scss";

function App() {

  const [infomation, setInformation] = useState({
    address:"558 Fox Hill Rd, Chatham, MA 02633 USA",
    houseType:"House",
    bathRoom:3,
    bedRoom:3,
    size:1800,
    yearBuilt:2000,
    price:"15,000",
    membershipFee:"500"
  })


  return (
    <div className="DetailBuy">
      <div className="DetailBuy-Contain">
        <div className="shareCollect">
          <div className="share">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00078 1.80005L12.9008 5.40005M9.00078 1.80005L5.40078 5.40005M9.00078 1.80005V13.2M16.2008 8.40005V16.2H1.80078V8.40005" stroke="#0E547B" stroke-width="1.6"/>
            </svg>
            <span>Share</span>

          </div>
          <div className="collect">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.84225 9.04269L9.99961 16.2L17.157 9.04269C17.9526 8.24704 18.3996 7.16791 18.3996 6.04269C18.3996 3.69954 16.5001 1.80005 14.157 1.80005C13.0317 1.80005 11.9526 2.24704 11.157 3.04269L9.99961 4.20005L8.84225 3.04269C8.0466 2.24704 6.96747 1.80005 5.84225 1.80005C3.4991 1.80005 1.59961 3.69954 1.59961 6.04269C1.59961 7.16791 2.0466 8.24704 2.84225 9.04269Z" stroke="#FF99DD" stroke-width="1.6" stroke-linejoin="round"/>
            </svg>
            <span>Collect</span>
          </div>

        </div>
        <div className="address">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00078 10.1937C10.3256 10.1937 11.4008 9.11919 11.4008 7.79525C11.4008 6.47132 10.3256 5.39683 9.00078 5.39683C7.67598 5.39683 6.60078 6.47132 6.60078 7.79525C6.60078 9.11919 7.67598 10.1937 9.00078 10.1937Z" stroke="#0E547B" stroke-linecap="square"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2008 7.79525C16.2008 13.7913 10.2008 17.389 9.00078 17.389C7.80078 17.389 1.80078 13.7913 1.80078 7.79525C1.80078 3.82224 5.02518 0.599976 9.00078 0.599976C12.9764 0.599976 16.2008 3.82224 16.2008 7.79525Z" stroke="#0E547B" stroke-linecap="square"/>
          </svg>
          <span>
            {infomation.address}
          </span>
        </div>
        <div className="houseDetail">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.599609 6.59998L0.30899 6.19311L0.0996094 6.34267V6.59998H0.599609ZM8.99961 0.599976L9.29023 0.193109C9.11638 0.0689312 8.88284 0.0689312 8.70899 0.193109L8.99961 0.599976ZM17.3996 6.59998H17.8996V6.34267L17.6902 6.19311L17.3996 6.59998ZM2.99961 10.2V9.69998H2.49961V10.2H2.99961ZM7.79961 10.2H8.29961V9.69998H7.79961V10.2ZM1.09961 18V6.59998H0.0996094V18H1.09961ZM0.890228 7.00684L9.29023 1.00684L8.70899 0.193109L0.30899 6.19311L0.890228 7.00684ZM8.70899 1.00684L17.109 7.00684L17.6902 6.19311L9.29023 0.193109L8.70899 1.00684ZM16.8996 6.59998V18H17.8996V6.59998H16.8996ZM3.49961 18V10.2H2.49961V18H3.49961ZM2.99961 10.7H7.79961V9.69998H2.99961V10.7ZM7.29961 10.2V18H8.29961V10.2H7.29961ZM5.99961 14.3H7.79961V13.3H5.99961V14.3ZM13.2996 9.59997V14.4H14.2996V9.59997H13.2996ZM15.6996 2.39998V5.39998H16.6996V2.39998H15.6996Z" fill="#0E547B"/>
          </svg>

          <span>
            {infomation.houseType + " · " +
                infomation.bedRoom + "BD · " +
                infomation.bathRoom + "BA · " +
                infomation.size + "sft"}
          </span>
        </div>
        <div className="yearBuilt">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.19961 0V6M13.7996 0V6M3.59961 9H7.19961M14.3996 9H10.7996M3.59961 12.6H7.19961M10.7996 12.6H14.3996M1.79961 3H16.1996C16.8623 3 17.3996 3.53726 17.3996 4.2V16.2C17.3996 16.8627 16.8623 17.4 16.1996 17.4H1.79961C1.13687 17.4 0.599609 16.8627 0.599609 16.2V4.2C0.599609 3.53726 1.13687 3 1.79961 3Z" stroke="#0E547B"/>
          </svg>

          <span>
            <strong>{"Year Built | "}</strong>
                {infomation.yearBuilt}
          </span>
        </div>

        <div className="price-membershipFee">
          <span className="tag">
            Price
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
                <path d="M8.76562 18.5625H12.1875H15.2344" fill="#0352C9"/>
                <path d="M9.1875 10.3125H12.1875V18.5625M8.76562 18.5625H12.1875M15.2344 18.5625H12.1875" stroke="#0352C9" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="square"/>
                <path d="M12 7.5C11.7033 7.5 11.4133 7.41203 11.1666 7.24721C10.92 7.08238 10.7277 6.84811 10.6142 6.57403C10.5006 6.29994 10.4709 5.99834 10.5288 5.70737C10.5867 5.41639 10.7296 5.14912 10.9393 4.93934C11.1491 4.72956 11.4164 4.5867 11.7074 4.52882C11.9983 4.47094 12.2999 4.50065 12.574 4.61418C12.8481 4.72771 13.0824 4.91997 13.2472 5.16665C13.412 5.41332 13.5 5.70333 13.5 6C13.5 6.39783 13.342 6.77936 13.0607 7.06066C12.7794 7.34197 12.3978 7.5 12 7.5Z" fill="#0352C9"/>
              </g>
            </svg>
          </span>

          <span className="price-number">
            <strong>
              {"$" + infomation.price}
            </strong>
            /share
          </span>

        </div>

        <div className="price-membershipFee">
          <span className="tag">
            Membership fee
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
                <path d="M8.76562 18.5625H12.1875H15.2344" fill="#0352C9"/>
                <path d="M9.1875 10.3125H12.1875V18.5625M8.76562 18.5625H12.1875M15.2344 18.5625H12.1875" stroke="#0352C9" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="square"/>
                <path d="M12 7.5C11.7033 7.5 11.4133 7.41203 11.1666 7.24721C10.92 7.08238 10.7277 6.84811 10.6142 6.57403C10.5006 6.29994 10.4709 5.99834 10.5288 5.70737C10.5867 5.41639 10.7296 5.14912 10.9393 4.93934C11.1491 4.72956 11.4164 4.5867 11.7074 4.52882C11.9983 4.47094 12.2999 4.50065 12.574 4.61418C12.8481 4.72771 13.0824 4.91997 13.2472 5.16665C13.412 5.41332 13.5 5.70333 13.5 6C13.5 6.39783 13.342 6.77936 13.0607 7.06066C12.7794 7.34197 12.3978 7.5 12 7.5Z" fill="#0352C9"/>
              </g>
            </svg>
          </span>

          <span className="price-number">
            <strong>
              {"$" + infomation.membershipFee}
            </strong>
            /share
          </span>

        </div>

        <div className="buttons">
          <Button className="contact">
            Contact
          </Button >
          <Button className="buy">
            Buy
          </Button >
        </div>
        <div className="share-more">
          More than one share can be purchased.
        </div>
        <div className="report">
          Report this listing
        </div>
      </div>
    </div>
  );
}

export default App;
