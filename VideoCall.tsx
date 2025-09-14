import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  Settings, 
  Users, 
  MessageSquare,
  Share,
  MoreVertical
} from 'lucide-react';

const VideoCall = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [showParticipants, setShowParticipants] = useState(false);

  const participants = [
    { id: 1, name: 'John Smith', isHost: true, isMuted: false },
    { id: 2, name: 'Sarah Johnson', isHost: false, isMuted: true },
    { id: 3, name: 'Mike Davis', isHost: false, isMuted: false },
    { id: 4, name: 'Emily Brown', isHost: false, isMuted: true }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 flex flex-col"
    >
      {/* Main Video Area */}
      <div className="flex-1 relative">
        {/* Main Video Feed */}
        <div className="h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center text-white"
          >
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">JS</span>
            </div>
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-blue-200">Host</p>
          </motion.div>

          {/* Self Video (Picture-in-Picture) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-blue-500"
          >
            <div className="h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              {isVideoOn ? (
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-lg font-semibold">ME</span>
                  </div>
                  <p className="text-sm">You</p>
                </div>
              ) : (
                <div className="text-gray-400 text-center">
                  <VideoOff className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-xs">Video Off</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Participant Grid (when multiple people) */}
          <div className="absolute bottom-20 left-4 right-4">
            <div className="grid grid-cols-4 gap-4">
              {participants.slice(1).map((participant) => (
                <motion.div
                  key={participant.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative"
                >
                  <div className="text-white text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-sm font-semibold">
                        {participant.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-xs">{participant.name.split(' ')[0]}</p>
                  </div>
                  {participant.isMuted && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <MicOff className="h-3 w-3 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-800 p-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Left Controls */}
          <div className="flex items-center space-x-4">
            <div className="text-white">
              <p className="font-medium">Business Strategy Meeting</p>
              <p className="text-sm text-gray-300">42:15 elapsed</p>
            </div>
          </div>

          {/* Center Controls */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMicOn(!isMicOn)}
              className={`p-3 rounded-full transition-colors ${
                isMicOn ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-3 rounded-full transition-colors ${
                isVideoOn ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
            >
              <Phone className="h-5 w-5 transform rotate-[135deg]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors"
            >
              <Share className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowParticipants(!showParticipants)}
              className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors relative"
            >
              <Users className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {participants.length}
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors"
            >
              <Settings className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors"
            >
              <MoreVertical className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Participants Panel */}
      {showParticipants && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="absolute top-0 right-0 h-full w-80 bg-gray-800 border-l border-gray-700 p-4"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold">
              Participants ({participants.length})
            </h3>
            <button
              onClick={() => setShowParticipants(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3">
            {participants.map((participant) => (
              <div key={participant.id} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {participant.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">{participant.name}</p>
                  <div className="flex items-center space-x-2">
                    {participant.isHost && (
                      <span className="text-xs text-blue-400">Host</span>
                    )}
                    {participant.isMuted && (
                      <MicOff className="h-3 w-3 text-red-400" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VideoCall;