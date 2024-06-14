const express = require('express');

const Void = async(req, res)=>{
    return res.status(200).json({Aviso: "Welcome to the mato"})

}

module.exports = {
    Void
}