//import { Observable } from 'rxjs';
const Observable = require('rxjs').Observable;

const observable = Observable.create((o) => {
  o.next('Hello observer!');
  o.next('Goodbye observer!');
  o.complete();
  o.next('Is anybody out there???');
});

observable.subscribe(
  (x) => console.log(x),
  (error) => console.error(error),
  () => console.log('complete!')
);

observable.subscribe(
  (x) => console.log(`*** ${x} ***`),
  (error) => console.error(error),
  () => console.log('Is that all?\n')
);

const observableNumbers = Observable.create((o) => {
  o.next(1);
  o.next(2);
  o.next(3);
  o.complete();
});

observableNumbers.subscribe(
  (n => console.log(n + 1)),
  console.error,
  () => console.log('fin\n')
)

const asyncObservable = Observable.create((o) => {
  setTimeout(() => {
    o.next('first')
    o.complete();
  });
  o.next('last');
});

asyncObservable.subscribe((o => console.log(o)));

