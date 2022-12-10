import { ButtonBackgroundComponent } from './button-background.component';

describe('ButtonBackgroundComponent', () => {
 
  it('changeBackground() should change the background and font color of the page', () => {
    const comp = new ButtonBackgroundComponent();

    // test the initial color of the background
    // as a default the initial backgroundColor and font color of the app is ''
    expect(document.body.style.backgroundColor)
      .withContext('Before pressing the button changeBackground')
      .toBe('');
    expect(document.body.style.color)
      .withContext('Before pressing the button changeBackground')
      .toBe('');
    // also I test if the initial color is different from when the button is clicked
    expect(document.body.style.backgroundColor)
      .withContext('Before pressing the button changeBackground')
      .not.toBe('grey');
    expect(document.body.style.color)
      .withContext('Before pressing the button changeBackground')
      .not.toBe('white');
    
    // then I click the button
    comp.changeBackground()

    // test the background color after the button is pressed
    expect(document.body.style.backgroundColor)
      .withContext('After pressing the button changeBackground')
      .toBe('grey');
    // test the font color after the button is pressed
    expect(document.body.style.color)
      .withContext('After pressing the button changeBackground')
      .toBe('white');
  })
});
