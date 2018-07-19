import { shorten } from './stringUtils';

describe('shorten', () => {
  const ellip = ' ...';
  it('leaves text alone if short enough', () => {
    const justFine = 'a'.repeat(139);
    expect(shorten(justFine)).toEqual(justFine);
  });

  it('shortens when there are no breaks', () => {
    const tooLong = 'a'.repeat(141);
    const expected = 'a'.repeat(140) + ellip;
    expect(shorten(tooLong)).toEqual(expected);
  });

  it('shortens to 140 when 141 is a non-word', () => {
    const tooLong = 'a'.repeat(140) + ' ';
    const expected = 'a'.repeat(140) + ellip;
    expect(shorten(tooLong)).toEqual(expected);
  });

  describe('shortening more than necessary', () => {
    const testWithChar = char => {
      const tooLong = 'a'.repeat(135) + char + 'b'.repeat(50);
      const expected = 'a'.repeat(135) + ellip;
      expect(shorten(tooLong)).toEqual(expected);
    };

    it('shortens to the nearest whitespace', () => {
      testWithChar(' ');
      testWithChar('\n');
      testWithChar('\t');
    });

    it('shortens to the nearest punctuation', () => {
      testWithChar('.');
      testWithChar(';');
      testWithChar('!');
    });
  });
});
