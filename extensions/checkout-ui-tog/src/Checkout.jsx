import {
  reactExtension,
  InlineLayout,
  View,
  Image,
  Text,
} from '@shopify/ui-extensions-react/checkout';
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);
function Extension() {
  return (
    <InlineLayout id="togBadge" columns={['25%', 'fill']}>
      <View id="togBadgeCell1" border="base" padding="base">
        <Image id="togBadgeImage" source="https://cdn.shopify.com/s/files/1/0805/6288/0826/files/tog.png?v=1692468391" />
      </View>
      <View id="togBadgeCell2" border="base" padding="base">
        <Text id="togBadgeText" size="small">If you don’t love your first pair of underwear, we will send you a different size or issue you a full refund—no return required.</Text>
      </View>
    </InlineLayout>
  );
}
