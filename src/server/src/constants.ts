import dotenv from 'dotenv'

dotenv.config()

export const FOOD_DATA_CENTRAL_API_ROOT = 'https://api.nal.usda.gov/fdc/v1'
export const EDAMAM_API_BASE_URL = process.env.EDAMAM_API_BASE_URL
export const EDAMAM_FOOD_DATABASE_API_URL = `${process.env.EDAMAM_API_BASE_URL}/api/food-database/v2`
export const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY
export const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID
