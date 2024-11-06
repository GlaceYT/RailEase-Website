import React, { useEffect, useState } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

const ChatPage: React.FC = () => {
  const [directLine, setDirectLine] = useState<any>(null);
  const [userId] = useState<string>(`user_${Date.now()}`); // Generate a unique user ID
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    phoneNumber: '',
    email: '',
    profilePicture: ''
  });

  const [locationData, setLocationData] = useState({
    villageOrCity: '',
    district: '',
    state: ''
  });

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }

    const storedLocation = localStorage.getItem('location');
    if (storedLocation) {
      setLocationData(JSON.parse(storedLocation));
    }
  }, []);

  // Set up DirectLine and send initial message
  useEffect(() => {
    const directLineConnection = createDirectLine({
      secret: 'a0do1Q5_shc.mz2H2znux6kD-cYkdsLM0qUM6iK9eqrdkcJD-yPcWAA',
    });

    setDirectLine(directLineConnection);

    // Send the initial message when the chat is connected
    directLineConnection.postActivity({
      from: { id: userId, name: userData.name || 'User1' }, // Use the unique user ID here
      type: 'message',
      text: 'Connected to the chat!',
      channelData: {
        name: userData.name,
        username: userData.username,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        villageOrCity: locationData.villageOrCity,
        district: locationData.district,
        state: locationData.state,
      },
    }).subscribe(
      (id: string) => console.log('Initial message sent successfully:', id),
      (error: any) => console.error('Error sending initial message:', error)
    );
  }, [userId, userData, locationData]);

  return (
    <>
      {directLine ? (
        <div style={{ height: '500px', width: '100%' }}>
          <ReactWebChat
            directLine={directLine}
            userID={userId} // Use the unique user ID for the ReactWebChat
            username={userData.username || 'User1'}
            styleOptions={{
              bubbleBackground: '#f4f4f4',
              bubbleBorderRadius: 20,
              bubbleTextColor: '#333',
              botAvatarInitials: 'AI',
              userAvatarInitials: userData.name?.[0] || 'U',
              bubbleFromUserBackground: '#f06',
              bubbleFromUserTextColor: '#fff',
              // Profile picture inside the chat
              userAvatarImage: userData.profilePicture
                ? `data:image/jpeg;base64,${userData.profilePicture}`
                : '/default-avatar.png',
            }}
          />
        </div>
      ) : (
        <div>Loading chat...</div>
      )}
    </>
  );
};

export default ChatPage;
