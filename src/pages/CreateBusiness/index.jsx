import React from "react";
import { Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import Header from "../../components/Header";
import Upload from "../../components/Upload";
import BasicInfo from "../../components/BasicInfo";
import AdditionalInfo from "../../components/AdditionalInformation";
import NextofNext from "../../components/NextofNext";

const CreateBusiness = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    highestDegree: "",
    nationality: "",
    designation: "",
    selectedImage: null,
    kinAddress: "",
    kinEmail: "",
    kinFirstName: "",
    kinLastName: "",
    kinMobile: "",
  };
  const onSubmit = (values) => {
    // Handle form submission logic here

    console.log(values);
  };
  return (
    <>
      <Header />
      <div className="custom-container">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ setFieldValue, values }) => (
            <Form>
              <Upload setFieldValue={setFieldValue} values={values} />
              <BasicInfo />
              <AdditionalInfo />

              <NextofNext />

              <div className="mt-4 mb-8 button-container">
                <Button
                  variant="secondary"
                  className="cancel-button"
                  href="/manage-business"
                >
                  Cancel
                </Button>

                <Button type="submit" className="next-button">
                  Next
                </Button>
              </div>
            </Form>
          )}
        />
      </div>
    </>
  );
};

export default CreateBusiness;
