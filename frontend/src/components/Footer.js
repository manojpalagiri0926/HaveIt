import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBBox className="shadow" style={{ backgroundColor: '#141417', color: 'white', marginTop: '30px' }}>

      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox width="100%" md="50%">
            <span className="ms-3 h5 font-weight-bold">Foodei</span>
            <p className="my-3" style={{ width: '100%', maxWidth: '250px' }}>
              © 2023 Foodei Technologies Pvt. Ltd
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="white">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="white" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="white" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox width="100%" md="50%">
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Company
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <span style={{ color: 'white' }}>About</span><br/>
                <span style={{ color: 'white' }}>Careers</span><br/>
                <span style={{ color: 'white' }}>Team</span><br/>
                <span style={{ color: 'white' }}>Swiggy One</span><br/>
                <span style={{ color: 'white' }}>Swiggy Instamart</span><br/>
                <span style={{ color: 'white' }}>Swiggy Genie</span><br/>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox width="100%" md="50%">
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Contact us
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <span style={{ color: 'white' }}>Help & Support</span><br/>
                <span style={{ color: 'white' }}>Partner with us</span><br/>
                <span style={{ color: 'white' }}>Ride with us</span><br/>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox width="100%" md="50%">
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Legal
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <span style={{ color: 'white' }}>Terms & Conditions</span><br/>
                <span style={{ color: 'white' }}>Cookie Policy</span><br/>
                <span style={{ color: 'white' }}>Privacy Policy</span><br/>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox>
          <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            We deliver to:
          </p>
          <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <span style={{ color: 'white' }}>Bangalore</span><br/>
            <span style={{ color: 'white' }}>Gurgaon</span><br/>
            <span style={{ color: 'white' }}>Hyderabad</span><br/>
            <span style={{ color: 'white' }}>Delhi</span><br/>
            <span style={{ color: 'white' }}>Mumbai</span><br/>
            <span style={{ color: 'white' }}>Pune</span><br/>
            {/* Add other cities as needed */}
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBBox>
  );
};
