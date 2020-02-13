const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDyfr8-dmHZoGR7ehAcbOzj6wBC1hCNq0E",
  authDomain: "reckitt-formulario.firebaseapp.com",
  databaseURL: "https://reckitt-formulario.firebaseio.com",
  projectId: "reckitt-formulario",
  storageBucket: "",
  messagingSenderId: "280111051036",
  appId: "1:280111051036:web:2da2f5711d1c2637"
});

const db = firebase.firestore();

function seedMinasGerais() {
  var ref = db.collection("stores").doc("minas-gerais");
  ref.set({
    _nome: "Minas Gerais",
    sigla: "MG",
    cidades: [
      {
        _nome: "Contagem",
        lojas: [{ _nome: "Sam's Contagem", codigo: 6278 }]
      },
      {
        _nome: "Belo Horizonte",
        lojas: [{ _nome: "Pampulha", codigo: null }]
      }
    ]
  });
}

seedMinasGerais();

function seedSaoPaulo() {
  var ref = db.collection("stores").doc("sao-paulo");
  ref.set({
    _nome: "São Paulo",
    sigla: "SP",
    cidades: [
      {
        _nome: "São Paulo",
        lojas: [
          { _nome: "Sam's Vila Leopoldina", codigo: 4415 },
          { _nome: "Sam's Bom Retiro", codigo: 4825 },
          { _nome: "Sam's Radial Leste", codigo: 4918 },
          { _nome: "Sam's Morumbi", codigo: 4930 }
        ]
      },
      {
        _nome: "São José dos Campos",
        lojas: [{ _nome: "Sam's São José dos Campos", codigo: 4931 }]
      }
    ]
  });
}

seedSaoPaulo();
