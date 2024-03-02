import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import BlogCard from "../components/cards/blogCard.jsx";
import Hero from "../components/hero/hero";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center bg-slate-300">
      <Button onClick={openHandler}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={closeHandler} size={'md'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quam
            at eos illum a similique minus eius, magnam exercitationem optio
            dolor voluptatem omnis saepe fugit libero velit quas, asperiores
            temporibus!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeHandler}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Hero />
      <BlogCard />
    </div>
  );
};

export default Home;
