const selectorGen = require ('./../data/selectors.json').general;
const expectedGen = require ('./../data/expected.json').general;
const selectorCnt = require ('./../data/selectors.json').counter;
const expectedCnt = require ('./../data/expected.json').counter;
const expectedDCF = require ('./../data/expected.json').defaultCounterFunctionality;

const inputNumber = require ('./../helpers/inputNumber');


describe('Default counter functionality', function () {


    it('TC-040 Subtract 1 gives -1', function () {
            browser.url('https://likejean.github.io/homework-5/');
            const button = $(selectorCnt.blackBtn);
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedDCF.countValueTC040);
    })

    it('TC-041 Add 3 gives 2', function () {
            const button = $$(selectorCnt.blackBtn)[5];
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedDCF.countValueTC041);
    })

    it('TC-042 LLF accept 1', function () {
        inputNumber('left', expectedDCF.inputMin);
        const result = $(selectorCnt.errorMsg).isDisplayed();
        expect(result).toEqual(false);
    })
    it('TC-0432 ULF accept 9', function () {
        inputNumber('right', expectedDCF.inputMax);
        const result = $(selectorCnt.errorMsg).isDisplayed();
        expect(result).toEqual(false);
    })

});