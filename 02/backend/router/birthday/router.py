from fastapi import APIRouter, Query
from datetime import date
from lib.birthday import BirthdayService
from schemas.birthday import BirthdayDetailsResponse

bday_router = APIRouter()
bday_service = BirthdayService()

@bday_router.get("/birthdayDetails", response_model=BirthdayDetailsResponse, status_code=200)
async def birthday_details(bday: date = Query(..., description="Birthday date in YYYY-MM-DD format", example="1999-12-27")):
    """
    Get some details about a given birthday like age in days, months, years, days until next birthday, days since last birthday and zodiac sign.
    """
    details = await bday_service.get_birthday_details(bday)
    return BirthdayDetailsResponse(**details)