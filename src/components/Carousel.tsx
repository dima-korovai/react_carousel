import React from 'react';
import './Carousel.scss';

type Props = {
  images: string[],
  step: number,
  frameSize: number,
  itemWidth: number,
  animationDuration: number,
  infinite: boolean,
};

type State = {
  imagesAmount: number,
  itemWidth : number,
  movedDistance: number,
  gap: number,
  frameSize: number,
  step: number,
  animationDuration: number,
  infinite: boolean,
};

class Carousel extends React.Component<Props, State> {
  state = {
    imagesAmount: this.props.images.length,
    itemWidth: this.props.itemWidth,
    movedDistance: 0,
    gap: 5,
    step: this.props.step,
    frameSize: this.props.frameSize,
    animationDuration: this.props.animationDuration,
    infinite: this.props.infinite,
  };

  handleImagesNext = () => {
    const {
      imagesAmount,
      itemWidth,
      movedDistance,
      gap,
      step,
      infinite,
      frameSize,
    } = this.state;

    if (infinite === true) {
      this.setState({ movedDistance: 0 });
    }

    const totalWidth = imagesAmount * (itemWidth + gap);

    if ((movedDistance + frameSize * (itemWidth + gap))
      < (imagesAmount * (itemWidth + gap))) {
      const leftWidth = (totalWidth - (movedDistance
        + (frameSize * (itemWidth + gap))));

      if ((leftWidth <= (itemWidth + gap) * step)) {
        this.setState(
          { movedDistance: movedDistance + leftWidth },
        );
      } else {
        this.setState(
          {
            movedDistance: movedDistance + (itemWidth + gap) * step,
          },
        );
      }
    }
  };

  handleImagesPrev = () => {
    const {
      imagesAmount,
      itemWidth,
      movedDistance,
      gap,
      step,
      infinite,
      frameSize,
    } = this.state;

    if (movedDistance >= ((itemWidth + gap) * step)) {
      this.setState({
        movedDistance: movedDistance - (itemWidth + gap) * step,
      });
    } else {
      this.setState({
        movedDistance: movedDistance - movedDistance,
      });
    }

    const totalWidth = imagesAmount * (itemWidth + gap);
    const leftWidth = (totalWidth - (frameSize * (itemWidth + gap)));

    if ((infinite === true) && movedDistance === 0) {
      this.setState({ movedDistance: leftWidth });
    }
  };

  render() {
    const { images } = this.props;
    const {
      imagesAmount,
      itemWidth,
      movedDistance,
      gap,
      step,
      frameSize,
      animationDuration,
      infinite,
    } = this.state;

    const listStyle = {
      transform: `translateX(${-movedDistance}px`,
      transition: `${animationDuration}ms`,
    };

    return (
      <div
        className="Carousel"
        style={{ width: `${itemWidth * frameSize}px` }}
      >
        <ul
          className="Carousel__list"
          style={listStyle}
        >
          {images.map((image, index) => {
            return (
              <li
                className="Carousel__item"
                key={image}
                style={{ marginRight: `${gap}px` }}
              >
                <img
                  src={image}
                  alt={`${index + 1}`}
                  width={`${itemWidth}`}
                />
              </li>
            );
          })}
        </ul>

        <div className="Carousel__buttons">
          <button
            disabled={movedDistance === 0 && infinite === false}
            className="Carousel__button Carousel__button--prev"
            type="button"
            onClick={this.handleImagesPrev}
          >
            Prev
          </button>

          <button
            data-cy="next"
            disabled={movedDistance >= ((imagesAmount - frameSize)
              * (itemWidth + gap)) && infinite === false}
            className="Carousel__button Carousel__button--next"
            type="button"
            onClick={this.handleImagesNext}
          >
            Next
          </button>
        </div>

        <form className="Carousel__form">
          <label className="Carousel__form__label">
            {'Moving step: '}
            <input
              className="Carousel__form__input"
              type="number"
              value={step}
              min="1"
              max="5"
              step="1"
              onChange={(e) => {
                this.setState({ step: +e.target.value });
              }}
            />
          </label>
          <label className="Carousel__form__label">
            {'Frame size: '}
            <input
              className="Carousel__form__input"
              type="number"
              value={frameSize}
              min="2"
              max="5"
              step="1"
              onChange={(e) => {
                this.setState({ frameSize: +e.target.value });
              }}
            />
          </label>
          <label className="Carousel__form__label">
            {'Image size: '}
            <input
              className="Carousel__form__input"
              type="number"
              value={itemWidth}
              min="110"
              max="200"
              step="10"
              onChange={(e) => {
                this.setState({ itemWidth: +e.target.value });
              }}
            />
          </label>
          <label className="Carousel__form__label">
            {'Motion speed: '}
            <input
              className="Carousel__form__input"
              type="number"
              value={animationDuration}
              min="300"
              max="3000"
              step="100"
              onChange={(e) => {
                this.setState({ animationDuration: +e.target.value });
              }}
            />
          </label>
          <label className="Carousel__form__label">
            {'Infinite: '}
            <input
              className="Carousel__form__input Carousel__form__input--checkbox"
              type="checkbox"
              onClick={() => {
                if (infinite === false) {
                  this.setState({ infinite: true });
                } else {
                  this.setState({ infinite: false });
                }
              }}
            />
          </label>

        </form>
      </div>
    );
  }
}

export default Carousel;