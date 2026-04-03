import { useClerk, useUser } from '@clerk/expo'
import { Pressable, Text, View } from 'react-native'

export default function IndexScreen() {
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-foreground">List Screen</Text>
      <Text className="mt-2 text-muted-foreground">Hello {user?.emailAddresses[0].emailAddress}</Text>
      <Pressable
        className="mt-6 rounded-xl bg-primary px-6 py-3"
        onPress={() => signOut()}
      >
        <Text className="font-semibold text-primary-foreground">Sign out</Text>
      </Pressable>
    </View>
  )
}
