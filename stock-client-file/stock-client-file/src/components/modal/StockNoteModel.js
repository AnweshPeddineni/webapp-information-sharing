import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Badge, Modal } from "antd";

const StockNoteModel = (props) => {
  const [modal2Visible, setModal2Visible] = useState(false);
  return (
    <>
      <Badge size="small" count={props.count}>
        <Link onClick={() => setModal2Visible(true)}>
          <FaEnvelope style={{ fontSize: "20px" }} />
        </Link>
      </Badge>
      <Modal
        title="Notes"
        centered
        visible={modal2Visible}
        onCancel={() => setModal2Visible(false)}
        onOk={() => setModal2Visible(false)}
      >
        {props.content}
      </Modal>
    </>
  );
};

export default StockNoteModel;
