AutoForm.hooks({
  EditFarmersMarketForm: {
    /**
     * After successful form submission, go to the MarketManager page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('MarketManager');
    }
  }
});
