// $(document).ready(function () {

//   $('#btn-create-user').click(function () {
//     let email = $('#input-email').val();
//     console.log(email)
//     let password = $('#input-password').val();

//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(function (result) {
//         console.log(result);
//         var token = result.credential.accessToken;
//         let user = result.user;
//         let name = result.user.displayName;
//         window.location.href = "feed.html";
//       })
//       .catch(function (error) {
//         let errorCode = error.code;
//         let errorMessage = error.message;
//       });
//   })
// });

// Butões
let btnFacebook = document.querySelector('#facebook-btn');
let btnGoogle = document.querySelector('#google-btn');
let btnLogin = document.querySelector('#login');
let btnCreateUser = document.querySelector('#btn-create-user');
// Inputs

btnCreateUser.addEventListener('click', function (e) {
  event.preventDefault();
  console.log('cliquei')
  let email = document.querySelector('#input-email').value;
  let password = document.querySelector('#input-password').value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (result) {
      window.location.href = "feed.html";
    })
    .catch(function (error) {
      console.error(error);
      alert('Falha na autenticação');
    });
});

function signIn(provider) {
  firebase.auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result);
      var token = result.credential.accessToken;
      var user = result.user;
      var name = result.user.displayName;
      window.location.href = "feed.html";
    }).catch(function (error) {
      console.error(error);
      alert('Falha na autenticação');
    });
}

// Autenticação via facebook
btnFacebook.addEventListener('click', function () {
  var provider = new firebase.auth.FacebookAuthProvider();
  signIn(provider);
});

// Autenticação via google
btnGoogle.addEventListener('click', function () {
  var provider = new firebase.auth.GoogleAuthProvider();
  signIn(provider);
});