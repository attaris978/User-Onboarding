describe("form input testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const nameInput = () => cy.get("[data-cy=nameInput");
  const emailInput = () => cy.get("[data-cy=emailInput");
  const passwordInput = () => cy.get("[data-cy=passwordInput");
  const termsInput = () => cy.get("[data-cy=termsInput");
  const submitButton = () => cy.get("[data-cy=submitButton]");

  it("check for name input label", () => cy.contains("Name:"));

  it("Name input exists", () => nameInput().should("exist"));

  it("Check that name input can receive string input", () => {
    nameInput()
      .should("have.value", "")
      .type("Aloysius")
      .should("have.value", "Aloysius");
  });

  it("Check that email input can receive input", () => {
    emailInput()
      .should("have.value", "")
      .type("Aloysius@email.com")
      .should("have.value", "Aloysius@email.com");
  });

  it("Check that password input can receive input", () => {
    passwordInput()
      .should("have.value", "")
      .type("aloysius")
      .should("have.value", "aloysius");
  });

  it("Check that terms checkbox can be checked", () => {
    termsInput()
      .click()
      .should("be.checked");
  });

  it("check submit button is disabled via form validation testing", () => {
    submitButton().should("be.disabled");
  });

  it("check submit button is enabled via form validation testing", () => {
    nameInput().type("Aloysius");
    emailInput().type("email@email.com");
    passwordInput().type("password");
    termsInput().check();
    submitButton().should("not.be.disabled");
  });

  it("verify form validation prevents submission with an empty input", () => {
    nameInput().type("Aloysius");
    emailInput().type("email@email.com");
    passwordInput().type("password");
    termsInput().check();
    submitButton().should("not.be.disabled");
    nameInput().type(
      "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}"
    );
    submitButton().should("be.disabled");
  });
  it("verify form can be submitted and data listed in the dom", () => {
    nameInput().type("Aloysius");
    emailInput().type("test@email.com");
    passwordInput().type("password");
    termsInput().check();
    submitButton().click();
    cy.contains("Aloysius test@email.com");
  })
});
