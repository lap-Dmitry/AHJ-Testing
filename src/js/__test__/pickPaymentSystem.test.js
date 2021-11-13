import pickPaymentSystem from '../pickPaymentSystem';

test.each([
  ['Visa', '4451344878316809', 'visa'],
  ['Mir', '2200770502176574', 'mir'],
  ['Mastercard', '5246625663068812', 'mastercard'],
  ['American Expess', '378087615020592', 'american-express'],
  ['Discover', '6011180501863934', 'discover'],
  ['JCB', '3158306852085856', 'jcb'],
  ['Diners Club', '30343867337444', 'diners-club'],
  ['Nonexistent system', '1011695386818851', false],
  ['Input is not a number', '37808761502o592', false],
])(('Test pickPaymentSystem for '), (_, input, expected) => {
  expect(pickPaymentSystem(input)).toBe(expected);
});
