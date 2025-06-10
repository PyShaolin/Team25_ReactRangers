import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, RefreshCw, CheckCircle, Wifi, WifiOff } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Scheme {
  id: string;
  title: string;
  description: string;
  downloaded: boolean;
  downloadProgress?: number;
  updateAvailable?: boolean;
}

interface OfflineManagerProps {
  schemes: Scheme[];
  onDownload: (schemeId: string) => void;
  onSync: () => void;
}

export function OfflineManager({ schemes, onDownload, onSync }: OfflineManagerProps) {
  const [isOnline, setIsOnline] = useState(true);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);

  // Track online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleDownload = (schemeId: string) => {
    setDownloadingId(schemeId);
    onDownload(schemeId);
  };

  const handleSync = () => {
    setSyncing(true);
    onSync();
    // Simulate sync completion after 2 seconds
    setTimeout(() => setSyncing(false), 2000);
  };

  const downloadedSchemes = schemes.filter(s => s.downloaded).length;
  const totalSchemes = schemes.length;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Offline Content Manager</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant={isOnline ? "default" : "destructive"} className="flex items-center gap-1">
              {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
              {isOnline ? "Online" : "Offline"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {/* Sync Section */}
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium">Offline Content</h3>
              <p className="text-sm text-gray-500">
                {downloadedSchemes} of {totalSchemes} schemes available offline
              </p>
            </div>
            <Button 
              onClick={handleSync}
              disabled={!isOnline || syncing}
              className="gap-2"
            >
              {syncing ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              {syncing ? "Syncing..." : "Sync Now"}
            </Button>
          </div>

          {/* Scheme List */}
          <div className="space-y-3">
            <h3 className="font-medium">Available Schemes</h3>
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
              {schemes.map((scheme) => (
                <div 
                  key={scheme.id} 
                  className="flex justify-between items-center p-3 border rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium truncate">{scheme.title}</h4>
                      {scheme.downloaded && !scheme.updateAvailable && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <CheckCircle size={12} />
                          Downloaded
                        </Badge>
                      )}
                      {scheme.updateAvailable && (
                        <Badge variant="outline" className="text-yellow-600 border-yellow-300">
                          Update Available
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">{scheme.description}</p>
                    
                    {downloadingId === scheme.id && scheme.downloadProgress !== undefined && (
                      <div className="mt-2">
                        <Progress value={scheme.downloadProgress} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">
                          Downloading... {scheme.downloadProgress}%
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="ml-4">
                    {!scheme.downloaded ? (
                      <Button 
                        size="sm" 
                        onClick={() => handleDownload(scheme.id)}
                        disabled={!isOnline || downloadingId === scheme.id}
                        className="gap-1"
                      >
                        <Download size={14} />
                        Download
                      </Button>
                    ) : scheme.updateAvailable ? (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(scheme.id)}
                        disabled={!isOnline || downloadingId === scheme.id}
                        className="gap-1"
                      >
                        <Download size={14} />
                        Update
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        disabled
                        className="gap-1"
                      >
                        <CheckCircle size={14} />
                        Downloaded
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offline Notice */}
          {!isOnline && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 flex items-start gap-3">
              <WifiOff className="w-5 h-5 mt-0.5 text-yellow-600" />
              <div>
                <p className="font-medium">You're offline</p>
                <p className="text-sm">
                  Downloading content and syncing are only available when you have an internet connection.
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}