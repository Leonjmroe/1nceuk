import pandas as pd
from binance.client import Client


class BinanceAPI:
    def __init__(self, api_key, api_secret):
        self.client = Client(api_key, api_secret)

    def get_account_info(self):
        return self.client.get_account()

    def get_asset_balance(self, asset):
        return self.client.get_asset_balance(asset=asset)

    def get_all_tickers(self):
        return self.client.get_all_tickers()


api_key = 'EAA39y8BFgB1q7c2bpuTXbpSDi0RkryvtjQj6YqJTjQ2yw8l84scLHsgWUz6pYO4'
api_secret = 'EAA39y8BFgB1q7c2bpuTXbpSDi0RkryvtjQj6YqJTjQ2yw8l84scLHsgWUz6pYO4'
binance = BinanceAPI(api_key, api_secret)

account_info = binance.get_account_info()
print(account_info)

balance = binance.get_asset_balance(asset='BTC')
print(balance)

tickers = binance.get_all_tickers()
print(tickers)
