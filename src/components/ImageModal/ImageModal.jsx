import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName={s.overlay}
      className={s.modal}
    >
      <img
        src={urls.regular}
        alt={alt_description || "Image"}
        className={s.img}
      />
      <div className={s.info}>
        <p>
          <strong>Author:</strong> {user.name}
        </p>

        <p>
          <strong>Likes:</strong> {likes}
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
