import React, { useContext, useEffect, useRef, useState } from "react";

// material UI imports
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { blockTypes, constants } from "../context/BlockContext";
import { TextareaAutosize } from "@mui/material";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const ParaModel = ({ options: { handleClose, justClose } }) => {
  const inputRef = useRef();
  const [text, setText] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveChanges = () => {
    const payload = {
      type: constants.ADD_BLOCK,
      payload: {
        type: blockTypes.PARAGRAPH,
        data: { content: text },
      },
    };
    handleClose(payload);
  };

  return (
    <>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={justClose}>
        Write Paragraph
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </Typography>
        <TextareaAutosize
          ref={inputRef}
          aria-label="minimum height"
          minRows={10}
          placeholder="Write Here"
          style={{ width: 500 }}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSaveChanges}>
          Save changes
        </Button>
      </DialogActions>
    </>
  );
};

export const ImgModel = ({ options: { handleClose, justClose } }) => {
  const inputRef = useRef();
  const [text, setText] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveChanges = () => {
    const payload = {
      type: constants.ADD_BLOCK,
      payload: {
        type: blockTypes.IMAGE,
        data: { link: text },
      },
    };
    handleClose(payload);
  };

  return (
    <>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={justClose}>
        Provide Image Link
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>Enter Link below :</Typography>
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={text}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSaveChanges}>
          Add Image
        </Button>
      </DialogActions>
    </>
  );
};

export const HeadingModel = ({ options: { handleClose, justClose } }) => {
  const inputRef = useRef();
  const [text, setText] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveChanges = () => {
    const payload = {
      type: constants.ADD_BLOCK,
      payload: { type: blockTypes.HEADING, data: { content: text } },
    };
    handleClose(payload);
  };

  return (
    <>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={justClose}>
        Write Heading
      </BootstrapDialogTitle>
      <DialogContent>
        <input type="text" ref={inputRef} onChange={handleChange} />
        <h1
          className="text-4xl font-extrabold"
          style={{
            fontSize: "32px",
            fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
            fontWeight: "700",
            letterSpacing: "-0.016em",
          }}
        >
          {text}
        </h1>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSaveChanges}>
          Set As Heading
        </Button>
      </DialogActions>
    </>
  );
};

export const DotsModel = ({ options: { handleClose, justClose } }) => {
  const handleSaveChanges = () => {
    const payload = {
      type: constants.ADD_BLOCK,
      payload: { type: blockTypes.THREEDOTS },
    };
    handleClose(payload);
  };

  return (
    <>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={justClose}>
        It will add three dots like this
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <div>
          <h1 className="text-center text-4xl" style={{ margin: "1em 0" }}>
            . . .
          </h1>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleSaveChanges}>
          Add Three Dots
        </Button>
      </DialogActions>
    </>
  );
};

export const iconTexts = {
  HEADING: "Heading",
  PARAGRAPH: "Paragraph",
  IMAGE: "Image",
  THREEDOTS: "Three dots",
};

export const ModelHandler = ({ text, handleClose, justClose }) => {
  const options = { handleClose, justClose };
  switch (text) {
    case iconTexts.HEADING:
      return <HeadingModel options={options} />;
      break;
    case iconTexts.PARAGRAPH:
      return <ParaModel options={options} />;
      break;
    case iconTexts.THREEDOTS:
      return <DotsModel options={options} />;
      break;
    case iconTexts.IMAGE:
      return <ImgModel options={options} />;
      break;
    default:
      break;
  }
};
