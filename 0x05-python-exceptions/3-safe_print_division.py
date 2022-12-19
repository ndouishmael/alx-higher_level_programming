#!/usr/bin/python3
def safe_print_division(a, b):
    quotient = None
    try:
        quotient = a / b
    except:
        pass
    finally:
        if quotient is not None:
            print("Inside result: {:.1f}".format(quotient))
        else:
            print("Inside result: None")
    return quotient
