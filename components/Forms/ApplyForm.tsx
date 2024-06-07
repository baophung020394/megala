// src/ApplyForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
} from "@chakra-ui/react";
import CustomInput from "./CustomInput";

// Định nghĩa các kiểu dữ liệu cho form
interface IFormInputs {
  name: string;
  projectName: string;
  email: string;
  telegram: string;
  uploadShareLink: string;
  blogLink: string;
  socialMediaLinks: string;
  projectDescription: string;
  sector: string;
  projectKeys: string;
  plan: string;
  productSteps: string;
  teamMembers: string;
  teamSkills: string;
  core: string;
  teamSize: string;
  token: string;
  fundraising: string;
  currentInvestors: string;
  raisePrice: string;
  nameAndTitle: string;
  valuation: string;
  contactedBinance: string;
  currentStatus: string;
  audited: string;
}

// Tạo schema xác thực với Yup
const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  projectName: yup.string().required("This field is required"),
  email: yup.string().email("Invalid email").required("This field is required"),
  nameAndTitle: yup.string().required("This field is required"),
  telegram: yup.string().required("This field is required"),
  uploadShareLink: yup.string().required("This field is required"),
  blogLink: yup.string().url("Invalid URL").required("This field is required"),
  socialMediaLinks: yup.string().required("This field is required"),
  projectDescription: yup.string().required("This field is required"),
  sector: yup.string().required("This field is required"),
  projectKeys: yup.string().required("This field is required"),
  plan: yup.string().required("This field is required"),
  productSteps: yup.string().required("This field is required"),
  teamMembers: yup.string().required("This field is required"),
  teamSkills: yup.string().required("This field is required"),
  core: yup.string().required("This field is required"),
  teamSize: yup.string().required("This field is required"),
  token: yup.string().required("This field is required"),
  fundraising: yup.string().required("This field is required"),
  currentInvestors: yup.string().required("This field is required"),
  raisePrice: yup.string().required("This field is required"),
  valuation: yup.string().required("This field is required"),
  contactedBinance: yup.string().required("This field is required"),
  currentStatus: yup.string().required("This field is required"),
  audited: yup.string().required("This field is required"),
});

const ApplyForm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const logo = "/assets/images/logo_apply_form.png";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxW="8xl"
        borderRadius="2rem"
        border="1.25px solid #41FFFF"
        background="#1F1E34"
        padding="5.5rem 10.8rem"
      >
        <ModalHeader>
          <Box textAlign="center">
            <Image src={logo} alt="Megala Venture Logo" mx="auto" mb="2rem" />
          </Box>
          <Text mb="1rem" fontSize="4.8rem" fontWeight="500" color="#fff">
            Apply to Megala Venture
          </Text>
          <Text mb="1rem" fontSize="2.1rem" fontWeight="300" color="#fff">
            Hi founders,
          </Text>
          <Text mb="1rem" fontSize="2.1rem" fontWeight="300" color="#fff">
            Thank you for your interest in applying for Megala Venture
            investment. If your project meets our investment criteria, we`ll
            contact you directly!
          </Text>
          <Text mb="1rem" fontSize="2.1rem" fontWeight="300" color="#fff">
            Please provide all requested information, and do keep in mind that a
            submission does not imply a commitment to any responses nor to any
            investment decisions.
          </Text>
          <Text mb="1rem" fontSize="2.1rem" fontWeight="300" color="#fff">
            {" "}
            - Megala Team
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack align="stretch">
                <CustomInput
                  id="name"
                  label="Name"
                  placeholder="Name"
                  register={register}
                  error={errors.name}
                />
                <CustomInput
                  id="projectName"
                  label="Project Name"
                  placeholder="Project Name"
                  register={register}
                  error={errors.projectName}
                />
                <CustomInput
                  id="nameAndTitle"
                  label="Name and title of contact person"
                  placeholder="Name and title of contact person"
                  register={register}
                  error={errors.projectName}
                />
                <CustomInput
                  id="email"
                  label="Email of contact person"
                  placeholder="Email of contact person"
                  register={register}
                  error={errors.email}
                  type="email"
                />
                <CustomInput
                  id="telegram"
                  label="Telegram of contact person"
                  placeholder="Telegram of contact person"
                  register={register}
                  error={errors.telegram}
                />
                <CustomInput
                  id="uploadShareLink"
                  label="Please upload and share the link of your investment pitch deck (.PDF) and any documents you"
                  placeholder="think may be useful for us"
                  register={register}
                  error={errors.uploadShareLink}
                />
                <CustomInput
                  id="blogLink"
                  label="Link to your website or blog"
                  placeholder="Link to your website or blog"
                  register={register}
                  error={errors.blogLink}
                />
                <CustomInput
                  id="socialMediaLinks"
                  label="Link to social media channels"
                  placeholder="Link to social media channels"
                  register={register}
                  error={errors.socialMediaLinks}
                />
                <CustomInput
                  id="projectDescription"
                  label="Brief description of your project"
                  placeholder="Brief description of your project"
                  register={register}
                  error={errors.projectDescription}
                />
                <CustomInput
                  id="sector"
                  label="What sector are you primarily focused on?"
                  placeholder="What sector are you primarily focused on?"
                  register={register}
                  error={errors.sector}
                />
                <CustomInput
                  id="projectKeys"
                  label="What are your projects key competitive advantages?"
                  placeholder="What are your projects key competitive advantages?"
                  register={register}
                  error={errors.projectKeys}
                />
                <CustomInput
                  id="plan"
                  label="Do you plan to integrate or build on BNB Chain?"
                  placeholder="Do you plan to integrate or build on BNB Chain?"
                  register={register}
                  error={errors.plan}
                />
                <CustomInput
                  id="productSteps"
                  label="What stage is your product?"
                  placeholder="What stage is your product?"
                  register={register}
                  error={errors.productSteps}
                />
                <CustomInput
                  id="teamMembers"
                  label="List all team members, whether they’re full-time or part-time, and links to their"
                  placeholder="Linkedin / Bio profiles."
                  register={register}
                  error={errors.teamMembers}
                />
                <CustomInput
                  id="teamSkills"
                  label="Team Skills"
                  placeholder="Team Skills"
                  register={register}
                  error={errors.teamSkills}
                />
                <CustomInput
                  id="core"
                  label="Where are your core team members based?"
                  placeholder="Where are your core team members based?"
                  register={register}
                  error={errors.core}
                />
                <CustomInput
                  id="teamSize"
                  label="What size is your team?"
                  placeholder="What size is your team?"
                  register={register}
                  error={errors.teamSize}
                />
                <CustomInput
                  id="token"
                  label="Token"
                  placeholder="Token"
                  register={register}
                  error={errors.token}
                />
                <CustomInput
                  id="fundraising"
                  label="Fundraising"
                  placeholder="Fundraising"
                  register={register}
                  error={errors.fundraising}
                />
                <CustomInput
                  id="valuation"
                  label="Valuation"
                  placeholder="Valuation"
                  register={register}
                  error={errors.valuation}
                />
                <CustomInput
                  id="currentInvestors"
                  label="Current investors, by ownership"
                  placeholder="Current investors, by ownership"
                  register={register}
                  error={errors.currentInvestors}
                />
                <CustomInput
                  id="raisePrice"
                  label="How much are you looking to raise? In equity, tokens, or a mix of the two?"
                  placeholder="How much are you looking to raise? In equity, tokens, or a mix of the two?"
                  register={register}
                  error={errors.raisePrice}
                />
                <CustomInput
                  id="contactedBinance"
                  label="Have you previously applied to or contacted Binance Labs?"
                  placeholder="Have you previously applied to or contacted Binance Labs?"
                  register={register}
                  error={errors.contactedBinance}
                />
                <CustomInput
                  id="currentStatus"
                  label="If you answered 'Yes' to the previous question, please briefly explain your current status"
                  placeholder="If you answered 'Yes' to the previous question, please briefly explain your current status"
                  register={register}
                  error={errors.currentStatus}
                />
                <CustomInput
                  id="audited"
                  label="Have you been audited? If so, please provide details."
                  placeholder="Have you been audited? If so, please provide details."
                  register={register}
                  error={errors.audited}
                />

                <Button
                  border="1px solid #41FFFF"
                  borderRadius="1rem"
                  backgroundColor="#242449"
                  padding="1.8rem 1.95rem"
                  fontSize="2.4rem"
                  color="#fff"
                  fontWeight="500"
                  textTransform="capitalize"
                  boxSizing="content-box"
                  maxH="6.5rem"
                  minW="18.1rem"
                  margin="3rem auto 0"
                  _hover={{
                    backgroundColor: "#41FFFF",
                    color: "#242449",
                  }}
                >
                  <Text>Submit</Text>
                </Button>
              </VStack>
            </form>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ApplyForm;
