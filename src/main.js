import outputOne from './output_one';
import outputTwo from './output_two';

// This serves only as example for a module loaded from `node_modules/`.
import titleize from 'titleize';

console.log(
  titleize(`${ outputOne(42) } and ${ outputTwo }`)
);
