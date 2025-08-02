/**
 * Predict body request in post
 */
export interface PredictRequest {
  /**
   * Image in base64 string, no including `data:png`
   */
  base64: string;
}

/**
 * Predict response
 */
export interface PredictResponse {
  /**
   * Accuracy percentage of predict (0-100)
   */
  accuracy: number;

  /**
   * Breed dog
   */
  breed_dog: string;

  /**
   * It define if prediction is unreliable
   */
  unreliable: boolean;
}

/**
 * Represent the history of predictions
 */
export interface HistoryItem extends PredictResponse {
  /**
   * Unique ID
   */
  id: string;
  /**
   * date of prediction (ISO format)
   */
  date: string;

  /**
   * Image local uri of photo used in prediction
   */
  image_uri: string;
}
