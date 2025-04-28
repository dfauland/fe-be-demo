from datetime import date
from dateutil.relativedelta import relativedelta

class BirthdayService:
    async def get_zodiac_of_date(self, date):
        # Stolen from stackoverflow 
        # https://stackoverflow.com/questions/3274597/how-would-i-determine-zodiac-astrological-star-sign-from-a-birthday-in-python
        zodiacs = [(120, 'Capricorn'), (218, 'Aquarius'), (320, 'Pisces'), (420, 'Aries'), (521, 'Taurus'),
           (621, 'Gemini'), (722, 'Cancer'), (823, 'Leo'), (923, 'Virgo'), (1023, 'Libra'),
           (1122, 'Scorpio'), (1222, 'Sagittarius'), (1231, 'Capricorn')]
        date_number = int("".join((str(date.month), '%02d' % date.day)))
        for z in zodiacs:
            if date_number <= z[0]:
                return z[1]


    async def get_birthday_details(self, bday: date):
        now = date.today()
        delta = relativedelta(now, bday)  # Calculate the relative time delta between now and the birthday
        age_in_days = (now - bday).days  # Calculate age in days
        
        # Calculate days untilnext birthday
        next_birthday = date(now.year, bday.month, bday.day)
        if next_birthday < now:  # If this year's birthday has passed
            next_birthday = date(now.year + 1, bday.month, bday.day)
        days_until_next_birthday = (next_birthday - now).days

        # Calculate days since last birthday
        last_birthday = date(now.year, bday.month, bday.day)
        if last_birthday > now:  # If this year's birthday has not yet passed
            last_birthday = date(now.year - 1, bday.month, bday.day)
        days_since_last_birthday = (now - last_birthday).days

        # Calculate zodiac
        zodiac = await self.get_zodiac_of_date(bday)

        return {
            "age_in_days": age_in_days,
            "age_in_months": delta.years * 12 + delta.months,
            "age_in_years": delta.years,
            "days_until_next_birthday": days_until_next_birthday,
            "days_since_last_birthday": days_since_last_birthday,
            "zodiac": zodiac
        }
