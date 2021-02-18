import Home from './home';

console.log('Hello from imported script');
console.log('Home', Home);

const getSettings = () => import('./settings');

const btn = document.createElement('button');
btn.innerText = 'Open settings';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  getSettings().then(module =>
    document.body.appendChild(document.createTextNode(module.default)),
  );
});
