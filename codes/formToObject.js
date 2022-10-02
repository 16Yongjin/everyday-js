const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );

// 예시
formToObject(document.querySelector('#form'));
// { email: 'test@email.com', name: 'Test Name' }
