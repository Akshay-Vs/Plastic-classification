import "./imageUploader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const ImageUploader = () => {
  return (
    <div class="container">
      <div class="image-container">
        <div className="upload-button">
          <div className="upload-image">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </div>
        </div>
        <h2>Upload</h2>
      </div>
    </div>
  );
};

export default ImageUploader;
