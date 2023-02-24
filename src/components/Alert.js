import React from 'react'

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Alert :</strong>{props.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}
