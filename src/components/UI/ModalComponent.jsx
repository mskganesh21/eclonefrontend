import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react'
import { useRef } from 'react'
import ReactStars from 'react-rating-stars-component'

const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)
  const initialRef = useRef(null)

  return (
    <>
      <Button
        onClick={onOpen}
        ref={finalRef}
        aria-label="Focus moved to this box"
      >
        Write A Review
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Write a Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Review:-</FormLabel>
              <Textarea ref={initialRef} />
            </FormControl>
            <ReactStars
              count={5}
              onChange={() => {}}
              size={24}
              isHalf={true}
              activeColor="#ffd700"
            />
          </ModalBody>
          <ModalFooter>
            <Button>Submit</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalComponent
