import { factory } from './factory';
//import axe  from 'react-axe';

//axe(factory,1000);

let count = factory(0, 1);

function update_count_and_reset_counter() {
  count = factory(Number(start_at_control.value), Number(step_control.value));

  current_count.innerHTML = !isNaN(Number(start_at_control.value))
    ? Number(start_at_control.value).toString()
    : '0';
}

const start_at_control = document.getElementById(
  'start_at',
) as HTMLInputElement;

const step_control = document.getElementById('step') as HTMLInputElement;

start_at_control?.addEventListener('input', () => {
  update_count_and_reset_counter();
});

step_control?.addEventListener('input', () => {
  update_count_and_reset_counter();
});

const count_button = document.querySelector(
  '.count_button',
) as HTMLButtonElement;

const current_count = document.querySelector(
  '.current_count',
) as HTMLSpanElement;

function update_count() {
  current_count.innerHTML = count().toString();
}

count_button.addEventListener('click', update_count);