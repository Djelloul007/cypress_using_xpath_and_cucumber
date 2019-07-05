Feature: EATestFeature
    Test EA features

    Scenario: Test the login feature
        Given I visit ExecuteAutomation Site
        Given I click login link
        When I login as user with "admin" and "password"
        Then I should see "Courses"
