from pydantic import BaseModel, Field

class BirthdayDetailsResponse(BaseModel):
    age_in_days: int = Field(..., description="Age in days", examples=[9251])
    age_in_months: int = Field(..., description="Age in months", examples=[303])
    age_in_years: int = Field(..., description="Age in years", examples=[25])
    days_until_next_birthday: int = Field(..., description="Days until next birthday", examples=[246])
    days_since_last_birthday: int = Field(..., description="Days since last birthday", examples=[119])
    zodiac: str = Field(..., description="Zodiac sign", examples=["Capricorn"])
