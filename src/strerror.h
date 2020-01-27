/**
 * Copyright (c) Jonathan Cardoso Machado. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
#ifndef STRERROR_H
#define STRERROR_H

#include <curl/curl.h>

const char* easy_strerror(CURLcode);

#endif
