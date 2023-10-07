export function logDirective(el, { expression }, { evaluateLater, effect }) {
  let getThingToLog = evaluateLater(expression);

  effect(() => {
    getThingToLog((thingToLog) => {
      console.log(thingToLog);
    });
  });
}
