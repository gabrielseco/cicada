describe('Home Page', () => {
  let phonesFromNetwork = [];

  it('Visits the app and assert the values mocked', () => {
    cy.server();
    cy.fixture('phones').then(phones => {
      cy.route('GET', '/phones', phones);
      phonesFromNetwork = phones;
    });

    cy.visit('/');

    cy.get('.phone-list-item').should('have.length', phonesFromNetwork.length);
    cy.get('.phone-list-item').each((value, index) => {
      cy.get('.title').contains(phonesFromNetwork[index].name);
      cy.get('.price').contains(phonesFromNetwork[index].price);
      cy.get(`#img-${phonesFromNetwork[index].id}`).should(
        'have.attr',
        'src',
        phonesFromNetwork[index].image
      );
      cy.get('a').contains('See more');
    });
  });

  it('Visits the app and clicks in one item', () => {
    cy.server();
    cy.fixture('phones').then(phones => {
      cy.route('GET', '/phones', phones);
      phonesFromNetwork = phones;
    });
    cy.visit('/');

    cy.get('.phone-list-item').should('have.length', phonesFromNetwork.length);
    cy.get(`#button-1`).click();
    cy.get('h2').contains(phonesFromNetwork[0].name);
  });
});
