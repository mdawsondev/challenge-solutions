def centuryFromYear(year):
    return int(year / 100) + 1 if year % 100 > 0 else year / 100