#import "EXGLView.h"

@interface EXGLARSessionManager : NSObject

- (NSDictionary *)startARSessionWithGLView:(EXGLView *)glView;
- (void)stopARSession;
- (void)updateARCamTexture;
- (NSDictionary *)arMatricesForViewportSize:(CGSize)viewportSize zNear:(CGFloat)zNear zFar:(CGFloat)zFar;

@end

